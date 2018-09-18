import React from 'react';
// axios is used for AJAX calls
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

  componentDidMount(){
      this.setImg(this.state.currImg);
      this.setSound(this.state.currSound);
      this.setText(this.state.currText);


  }

  updateTab(newTabNr){
      this.setState({tabNr : newTabNr}, function () {
          console.log(this.state.tabNr);
          this.setImg(this.state.currImg);
          this.setSound(this.state.currSound);
          this.setText(this.state.currText);
          //Loop through eeach tab and reset their className
          for(let x=1; x<5; x++){
              let item =document.getElementById("combinationButton"+x);
              item.className = item.className.replace("Selected", "");
          }
      //Change classname of the selected tab in order to get a different styling
      document.getElementById("combinationButton"+this.state.tabNr).className += "Selected";
      });
  }

  setImg(img){
      this.setState({currImg : img}, function () {
          this.fetchImage("img/" + this.state.currImg + "/" + this.state.tabNr + ".svg");
      });
  }

  setSound(sound){
      this.setState({currSound : sound}, function () {
          this.fetchSound("sound/" + this.state.currSound + "/" + this.state.tabNr + ".mp3");
      });
  }

  setText(text){

      this.setState({currText : text}, function () {
          console.log("Currtext" + this.state.currText + "  Text: " + text);
          this.fetchText("text/" + this.state.currText + "/" + this.state.tabNr + ".json");
      });
    
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

  fetchSound(urlPath){
      this.setState({audio : "assets/" + urlPath}, function () {
          this.refs.audio.pause();
          this.refs.audio.load();
      });
  }

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
