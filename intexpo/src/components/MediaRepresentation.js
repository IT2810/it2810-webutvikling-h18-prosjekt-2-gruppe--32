import React from 'react';
// axios is used for AJAX calls
import Categories from "./Categories";
import TabDisplay from "./TabDisplay";

class MediaRepresentation extends React.Component {
  constructor(props) {
    super(props);
    this.updateComboList = this.updateComboList.bind(this);
    this.updateTab = this.updateTab.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
    this.fetchText = this.fetchText.bind(this);
    this.fetchAudio = this.fetchAudio.bind(this);

      this.state = {
        combinations : [],
        tabNr : 1,
        svg : "",
        audio : "",
        text : "",
    };
  }

  componentDidMount(){
      this.fetchImage(this.state.combinations[0][0]);
      this.fetchAudio(this.state.combinations[0][1]);
      this.fetchText(this.state.combinations[0][2]);
  }

  updateComboList(comboList){
      this.state.combinations = comboList;
      console.log(comboList);
      console.log("køll2");
  }

  updateTab(newTabNr){
      this.state.tabNr = newTabNr;
      //Loop through eeach tab and reset their className
      for(let x=1; x<5; x++){
          let item =document.getElementById("combinationButton"+x);
          item.className = item.className.replace("Selected", "");
      }
      //Change classname of the selected tab in order to get a different styling
      document.getElementById("combinationButton"+this.state.tabNr).className += "Selected";
      //Update images, audio and text with the new tab number
      this.fetchImage(this.state.combinations[this.state.tabNr - 1][0]);
      this.fetchAudio(this.state.combinations[this.state.tabNr - 1][1]);
      this.fetchText(this.state.combinations[this.state.tabNr - 1][2]);
  }

  async fetchImage(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({svg: sessionStorage.getItem(urlPath)});
      }
      else{
          //kall updatenoe
          const res = await fetch("assets" + urlPath);
          const data = await res.text();
          sessionStorage.setItem(urlPath, data);
          this.setState({svg: sessionStorage.getItem(urlPath)});
      }
  }

  fetchAudio(urlPath){
      this.setState({audio : "assets" + urlPath}, function () {
          this.refs.audio.pause();
          this.refs.audio.load();
      });
  }

  async fetchText(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({text: sessionStorage.getItem(urlPath)});
      }
      else{
          const res = await fetch("assets" + urlPath);
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
                  <Categories setCombosCategories = {this.updateComboList} />
              </section>
          </section>
      </React.Fragment>
    )
  }
}


export default MediaRepresentation;
