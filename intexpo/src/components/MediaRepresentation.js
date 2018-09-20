import React from 'react';
import Categories from "./Categories";
import TabDisplay from "./TabDisplay";

class MediaRepresentation extends React.Component {
  constructor(props) {
    super(props);
    this.updateTab = this.updateTab.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
    this.fetchText = this.fetchText.bind(this);
    this.fetchSound = this.fetchSound.bind(this);
    this.setImg = this.setImg.bind(this);
    this.setSound = this.setSound.bind(this);
    this.setText = this.setText.bind(this);

    //Setting states
    //currImg, currSound, currText are set to startupValues
    this.state = {
        currImg : "Abstrakt",
        currSound : "Instrumenter",
        currText : "One-liners",
        svg : "",
        sound : "",
        text : "",
        tabNr : 1,
    };
  }

  //componentDidMount is running the first time the website are being loaded.
  //Shows the first combination with startupvalues
  componentDidMount(){
      this.updateTab(1);
  }

  //updateTab updates the gallery based on which tab the user are selecting
  //Setting a new state to the chosen tab and running the functions setImg, setSound and setText, which are updating the current combination.
  updateTab(newTabNr){
      this.setState({tabNr : newTabNr}, function () {
          this.setImg(this.state.currImg);
          this.setSound(this.state.currSound);
          this.setText(this.state.currText);


          //--- Method to change the color of the selected tab ---//
          //Loop through eeach tab and reset their className
          for(let x=1; x<5; x++){
              let comboButton = document.getElementById("combinationButton"+x);
              let comboTextLarge = document.getElementById("comboTextLarge"+x);
              let comboTextSmall = document.getElementById("comboTextSmall"+x);
              comboButton.className = comboButton.className.replace("Selected", "");
              comboTextLarge.className = comboTextLarge.className.replace("Selected", "");
              comboTextSmall.className = comboTextSmall.className.replace("Selected", "");
          }
          //Change classname of the selected tab in order to get a different styling
          document.getElementById("combinationButton"+this.state.tabNr).className += "Selected";
          document.getElementById("comboTextLarge"+this.state.tabNr).className += "Selected";
          document.getElementById("comboTextSmall"+this.state.tabNr).className += "Selected";
      });
  }

  //setImg retrieves a imagecategory from "Categories.js" and running fetchImage
  //which are fetching the image based on the tabNr the user are currently on
  //Also sets a new state to currImg to update the text that are being shown.
  setImg(img){
      this.setState({currImg : img}, function () {
          this.fetchImage("img/" + this.state.currImg + "/" + this.state.tabNr + ".svg");
      });
  }

  //setSound retrieves a soundcategory from "Categories.js" and running fetchSound
  //which are fetching the sound based on the tabNr the user are currently on
  //Also sets a new state to currSound to update the text that are being shown.
  setSound(sound){
      this.setState({currSound : sound}, function () {
          this.fetchSound("sound/" + this.state.currSound + "/" + this.state.tabNr + ".mp3");
      });
  }

  //setText retrieves a textcategory from "Categories.js" and running fetchText
  //which are fetching the text based on the tabNr the user are currently on.
  //Also sets a new state to currText to update the text that are being shown.
  setText(text) {
      this.setState({currText: text}, function () {
          this.fetchText("text/" + this.state.currText + "/" + this.state.tabNr + ".json");
      });
  }


  //fetchImage is an async function that are fetching images locally.
  //The function first checks if the urlPath are in the session storage.
  //If the urlPath are in the sessionStorage, it sets a new state to svg with the svgfile.
  //If the urlPath are not in the sessionStorage, the function fetch it and places it in the storage, and sets a new state to svg.
  async fetchImage(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({svg: sessionStorage.getItem(urlPath)});
      }
      else{
          const res = await fetch("assets/" + urlPath);
          const data = await res.text();
          sessionStorage.setItem(urlPath, data);
          this.setState({svg: sessionStorage.getItem(urlPath)});
      }
  }

  //Sounds are not being fetched.
  //fetchSound sets a new state to audio and runs this.refs.audio.pause()/load(), which are referring to the audio tag and plays the new sound
  fetchSound(urlPath){
      this.setState({audio : "assets/" + urlPath}, function () {
          this.refs.audio.pause();
          this.refs.audio.load();
      });
  }
  //fetchText is an async function that are fetching text locally.
  //The function first checks if the urlPath are in the session storage.
  //If the urlPath are in the sessionStorage, it sets a new state to text with the jsonfile.
  //If the urlPath are not in the sessionStorage, the function fetch it and places it in the storage, and sets a new state to text.
  async fetchText(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({text: sessionStorage.getItem(urlPath)});
      }
      else{
          const res = await fetch("assets/" + urlPath);
          const data = await res.text();
          sessionStorage.setItem(urlPath, data);
          this.setState({text: sessionStorage.getItem(urlPath)});
    }
  }

  render() {
    return(
      <React.Fragment>
          <section id="container">
              <section id="innerContainer">
                  <section id="combinationMenu">
                      <TabDisplay updateTab = {this.updateTab} tabNr="1"/>
                      <TabDisplay updateTab = {this.updateTab} tabNr="2"/>
                      <TabDisplay updateTab = {this.updateTab} tabNr="3"/>
                      <TabDisplay updateTab = {this.updateTab} tabNr="4"/>
                  </section>
                  <section id="mediaContainer">
                      <section id="mediaPictureContainer">
                          <section id="picFrame">
                              <section id="svgImage" dangerouslySetInnerHTML={{__html: this.state.svg}}/>
                          </section>
                      </section>

                      <section id="mediaAudioContainer">
                          <audio ref="audio" loop controls>
                              <source src={this.state.audio} type= "audio/mp3"/>
                              Your browser does not support the audio element
                          </audio>
                      </section>
                      <section id="mediaTextContainer">
                          <section id="mediaText" dangerouslySetInnerHTML={{__html: this.state.text}} />
                      </section>
                  </section>
              </section>
              <section id="mediaCategory">
                  <section id="categoryHeader">Kategorier</section>
                  <Categories setText = {this.setText} setSound = {this.setSound} setImg = {this.setImg} setCombosCategories = {this.updateComboList} />
              </section>
          </section>
      </React.Fragment>
    )
  }
}

export default MediaRepresentation;