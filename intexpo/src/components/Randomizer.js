import React from 'react';
import '../style.css';
import AjaxHandler from './ajaxHandler.js';

class Randomizer extends React.Component {

    //Must take in which categories are selected, as a prop
    //This is an example
    var selectedCategories = ['Abstrakt', 'Musikk', 'Trump-quotes'];
    //The below should work, if the dropdown menu calls the ranomizer with the selected categories as props
    //var selectedCategories = [{this.props.selectedImage}, {this.props.selectedSound}, {this.props.selectedText}];

    //Must have list of all files of all categories saved
    var abstract = ['/images/abstract/abstract1.svg', '/images/abstract/abstract2.svg', '/images/abstract/abstract3.svg', '/images/abstract/abstract4.svg'];
    var animals = ['/images/animals/animal1.svg', '/images/animals/animal2.svg', '/images/animals/animal3.svg', '/images/animals/animal4.svg'];
    var cars = ['/images/cars/car1.svg', '/images/cars/car2.svg', '/images/cars/car3.svg', '/images/cars/car4.svg']
    var music = ['/sounds/music/1.mp3', '/sounds/music/2.mp3', '/sounds/music/3.mp3', '/sounds/music/4.mp3'];
    var instrument = ['/sounds/instruments/bagpipe.mp3', '/sounds/instruments/flute.mp3', '/sounds/instruments/harmonica.mp3', '/sounds/instruments/synth.mp3'];
    var weather = ['/sounds/weather/beach.mp3', '/sounds/weather/rain.mp3', '/sounds/weather/thunder.mp3', '/sounds/weather/wind.mp3'];
    var trump = ['/text/Trump-quotes/Trump-quote1.json', '/text/Trump-quotes/Trump-quote2.json', '/text/Trump-quotes/Trump-quote3.json', '/text/Trump-quotes/Trump-quote4.json'];
    var language = ['/text/Language/French.json', '/text/Language/German.json', '/text/Language/Nynorsk.json', '/text/Language/Spanish.json'];
    var oneliners = ['/text/One-liners/One-liner1.json', '/text/One-liners/One-liner2.json', '/text/One-liners/One-liner3.json','/text/One-liners/One-liner4.json'];

    //Must then select four unique combinations based on the selected categories
    var combo1 = []; var combo2 = []; var combo3 = [];var combo4 = [];
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
            //<AjaxHandler /* Pass combos-list as props here. */ />
            //Example:
            <AjaxHandler combos=this.combos />
        )
    }
}

export default Randomizer;