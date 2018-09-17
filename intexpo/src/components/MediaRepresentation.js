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
        svg : "",
        audio : "",
        text : "",
    };
  }

  updateCombos(comboList){
      this.state.combinations = comboList;
  }

  updateTab(newTabNr){
      this.state.tabNr = newTabNr;
      this.fetchImage(this.state.combinations[this.state.tabNr - 1][0]);
      this.fetchAudio(this.state.combinations[this.state.tabNr - 1][1]);
      this.fetchText(this.state.combinations[this.state.tabNr - 1][2]);
  }

  async fetchImage(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({svg: sessionStorage.getItem(urlPath)});
      }
      else{
          const res = await fetch("assets" + urlPath);
          const data = await res.text();
          this.setState({svg: "assets" + urlPath});
          sessionStorage.setItem(urlPath, data);
      }
  }

  fetchAudio(urlPath){
      this.setState({audio : "assets" + urlPath});
      console.log(this.state.audio);
  }

  async fetchText(urlPath){
      if(sessionStorage.getItem(urlPath) != null){
          this.setState({text: sessionStorage.getItem(urlPath)});
      }
      else{
          const res = await fetch("assets" + urlPath);
          const data = await res.text();
          this.setState({text: "assets" + urlPath});
          sessionStorage.setItem(urlPath, data);
    }
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
                          <div id="mainImage" dangerouslySetInnerHTML={{__html: this.state.svg}}/>
                      </section>
                  </section>
                  <section id="mediaAudioContainer">
                      <audio controls>
                          <source src={this.state.audio} type= "audio/mp3"/>
                          Your browser does not support the audio element
                      </audio>
                  </section>
                  <section id="mediaTextContainer">
                      <div id="mediaText" dangerouslySetInnerHTML={{__html: this.state.text}} />
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
