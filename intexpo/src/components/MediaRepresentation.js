import React from 'react';
// axios is used for AJAX calls
import axios from 'axios';
import Categories from "./Categories";
import TabDisplay from "./TabDisplay";

// sets example props
const props = {
  imagePath: "",
  textPath: '/text/Trump-quotes/Trump-quote1.json',
  soundPath: '/sounds/instruments/bagpipe.mp3'
};

class MediaRepresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        combinations : [],
        tabNr : 0,
    };

    this.updateCombos = this.updateCombos.bind(this);
    this.updateTab = this.updateTab.bind(this);
  }

  updateCombos(comboList){
      this.state.combinations = comboList;
      console.log(this.state.combinations);
  }

  updateTab(tabNr){
      this.state.tabNr = tabNr;
      console.log(this.state.tabNr);
  }


  componentDidMount() {
      for(let element in this.state.combinations[0]){

      }

  }

// the code below should not be working properly
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
                          <img className="mainImage" src="" alt="Pic    cannot be shown at this time"/>
                      </section>
                  </section>
                  <section id="mediaAudioContainer">
                      <audio controls>
                          <source src ="" type = "audio/mp3"/>
                          Your browser does not support the audio element
                      </audio>
                  </section>
                  <section id="mediaTextContainer">
                      <p id="mediaText">
                          Her burde det vært trump-quotes
                      </p>
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
