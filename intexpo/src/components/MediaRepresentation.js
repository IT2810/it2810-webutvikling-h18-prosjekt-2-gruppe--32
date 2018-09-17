import React from 'react';
// axios is used for AJAX calls
import Categories from "./Categories";
import TabDisplay from "./TabDisplay";

class MediaRepresentation extends React.Component {
  constructor(props) {
    super(props);
    this.updateCombos = this.updateCombos.bind(this);
    this.updateTab = this.updateTab.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
    this.state = {
        combinations : [],
        tabNr : 1,
        svgPath : "",
        audioPath : "",
        textPath : "",
    };
  }

  updateCombos(comboList){
      this.state.combinations = comboList;
  }

  updateTab(newTabNr){
      this.state.tabNr = newTabNr;
      this.fetchImage(this.state.combinations[this.state.tabNr - 1][0]);
  }

  async fetchImage(urlPath){
      console.log(urlPath);
      if(sessionStorage.getItem(urlPath) != null){
          console.log("Element already loaded");
          this.setState({svgPath: sessionStorage.getItem(urlPath)});
          console.log("test" + this.state.svgPath);
      }
      else{
          const res = await fetch("assets" + urlPath);
          const data = await res.text();
          this.setState({svgPath: "/assets" + urlPath});
          sessionStorage.setItem(urlPath, data);
      }
  }

  fetchAudio(urlPath){

  }

  fetchText(urlPath){

  }

  render() {
    return(
      <React.Fragment>
          <div id="combinationMenu">
              <TabDisplay updateTab = {this.updateTab} tabNr="1"/>
              <TabDisplay updateTab = {this.updateTab} tabNr="2"/>
              <TabDisplay updateTab = {this.updateTab} tabNr="3"/>
              <TabDisplay updateTab = {this.updateTab} tabNr="4"/>
          </div>
          <section id="container">
              <section id="mediaContainer">
                  <section id="mediaPictureContainer">
                      <section id="picFrame">
                          <div id="mainImage" dangerouslySetInnerHTML={{__html: this.state.svgPath}}/>
                      </section>
                  </section>
                  <section id="mediaAudioContainer">
                      <audio controls>
                          <source src={sessionStorage.getItem('sound' + this.state.tabNr)} type = "audio/mp3"/>
                          Your browser does not support the audio element
                      </audio>
                  </section>
                  <section id="mediaTextContainer">
                      <p id="mediaText">{sessionStorage.getItem('text' + this.state.tabNr)}</p>
                  </section>
                  <section id="mediaCategory">
                      <div id="categoryHeader">Kategorier</div>
                      <Categories setCombosCategories = {this.updateCombos}/>
                  </section>
              </section>
          </section>
      </React.Fragment>
    )
  }
}


export default MediaRepresentation;
