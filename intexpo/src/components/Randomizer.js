import React from 'react';
import '../style.css';
import AjaxHandler from './ajaxHandler.js';

class Randomizer extends React.Component {

    //Must take in which categories are selected, as a prop
    //This is an example
    var selectedCategories = ['Abstrakt', 'Musikk', 'Trump-quotes'];
    //The below should work, if the dropdown menu passes calls the ranomizer with the selected categories as props
    //var selectedCategories = [{this.props.selectedImage}, {this.props.selectedSound}, {this.props.selectedText}];

    //Must have list of all files of all categories saved
    var abstract = ['abstract1.svg', 'abstract2.svg', 'abstract3.svg', 'abstract4.svg'];
    var animals = ['animal1.svg', 'animal2.svg', 'animal3.svg', 'animal4.svg'];
    var cars = ['car1.svg', 'car2.svg', 'car3.svg', 'car4.svg']
    var music = ['1.mp3', '2.mp3', '3.mp3', '4.mp3'];
    var instrument = ['bagpipe.mp3', 'flute.mp3', 'harmonica.mp3', 'synth.mp3'];
    var weather = ['beach.mp3', 'rain.mp3', 'thunder.mp3', 'wind.mp3'];
    var trump = ['Trump-quote1.json', 'Trump-quote2.json', 'Trump-quote3.json', 'Trump-quote4.json'];
    var language = ['French.json', 'German.json', 'Nynorsk.json', 'Spanish.json'];
    var oneliners = ['One-liner1.json', 'One-liner2.json', 'One-liner3.json','One-liner4.json'];

    //Must then select four unique combinations based on the selected categories
    var combo1 = [];
    var combo2 = [];
    var combo3 = [];
    var combo4 = [];
    var combos = [this.combo1, this.combo2, this.combo3, this.combo4];
    //Get selected categories
    //Images
    if(this.selectedCategories[0]=="Abstrakt"){
      var imageCategory = this.abstract.slice(0);
    }
    else if(this.selectedCategories[0]=="Dyr"){
      var imageCategory = this.animals.slice(0);
    }
    else if(this.selectedCategories[0]=="Biler"){
      var imageCategory = this.cars.slice(0);
    }

    //Sounds
    if(this.selectedCategories[1]=="Instrument"){
      var soundCategory = this.instrument.slice(0);
    }
    else if(this.selectedCategories[1]=="Musikk"){
      var soundCategory = this.music.slice(0);
    }
    else if(this.selectedCategories[1]=="Vær"){
      var soundCategory = this.weather.slice(0);
    }

    //Text
    if(this.selectedCategories[2]=="Språk"){
      var textCategory = this.language.slice(0);
    }
    else if(this.selectedCategories[2]=="One-liners"){
      var textCategory = this.oneliners.slice(0);
    }
    else if(this.selectedCategories[2]=="Trump-quotes"){
      var textCategory = this.trump.slice(0);
    }

    //Put random elements in different combinations
    for(x=0; x<4; <++){
      //Find and add random image to combo
      var randomImageIndex = Math.floor(Math.random()*this.imageCategory.length);
      var image1 = this.imageCategory[this.randomImageIndex];
      this.combos[x].push(this.image1);
      this.imageCategory.splice(this.randomImageIndex, 1);

      //Find and add random sound to combo
      var randomSoundIndex = Math.floor(Math.random()*this.soundCategory.length);
      var sound1 = this.soundCategory[this.randomSoundIndex];
      this.combos[x].push(this.sound1);
      this.soundCategory.splice(this.randomSoundIndex, 1);

      //Find and add random text to combo
      var randomTextIndex = Math.floor(Math.random()*this.textCategory.length);
      var text1 = this.textCategory[this.randomTextIndex];
      this.combos[x].push(this.text1);
      this.textCategory.splice(this.randomTextIndex, 1);
    }

    //Must then pass on these four combinations to the ajax component as props

    render(){
        return (
            <AjaxHandler /* Pass combos-list as props here. */ />
            //Example:
            <AjaxHandler combo1=this.combo[0] combo2=this.combo[1] combo3=this.combo[2] combo4=this.combo[3] />
        )
    }
}

export default Randomizer;
