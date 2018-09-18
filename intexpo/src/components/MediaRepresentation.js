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

  updateCombos(comboList){
      this.state.combinations = comboList;
      console.log(this.state.combinations);
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
          //kall updatenoe
          const res = await fetch("assets" + urlPath);
          const data = await res.text();
          this.setState({svg: "assets" + urlPath});
          sessionStorage.setItem(urlPath, data);
      }
  }

  fetchAudio(urlPath){
      this.setState({audio : "assets" + urlPath}, function () {
          this.refs.audio.pause();
          this.refs.audio.load();
      });
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
                          <audio ref="audio" controls>
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
                  <Categories setCombosCategories = {this.updateCombos}/>
              </section>
          </section>
      </React.Fragment>
    )
  }
}


export default MediaRepresentation;
