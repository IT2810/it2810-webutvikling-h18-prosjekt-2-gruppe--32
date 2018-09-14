import React from 'react';
import '../style.css';

class Randomizer extends React.Component {

    //Must take in which categories are selected, as a prop
    //This is an example
    const selectedCategories = ['Abstrakt', 'Musikk', 'Trump-quotes'];
    //const selectedCategories = [{this.props.selectedImage}, {this.props.selectedSound}, {this.props.selectedText}];

    //Must have all files of all categories saved
    //This is an example
    const abstract = ['abstract1.svg', 'abstract2.svg', 'abstract3.svg', 'abstract4.svg'];
    const animals = ['animal1.svg', 'animal2.svg', 'animal3.svg', 'animal4.svg'];
    const cars = ['car1.svg', 'car2.svg', 'car3.svg', 'car4.svg']
    const music = ['1.mp3', '2.mp3', '3.mp3', '4.mp3'];
    const instrument = ['bagpipe.mp3', 'flute.mp3', 'harmonica.mp3', 'synth.mp3'];
    const weather = ['beach.mp3', 'rain.mp3', 'thunder.mp3', 'wind.mp3'];
    const trump = ['Trump-quote1.json', 'Trump-quote2.json', 'Trump-quote3.json', 'Trump-quote4.json'];
    const language = ['French.json', 'German.json', 'Nynorsk.json', 'Spanish.json'];
    const oneliners = ['One-liner1.json', 'One-liner2.json', 'One-liner3.json','One-liner4.json'];

    //Must then select four unique combinations based on the selected categories
    const combo1 = [];
    const combo2 = [];
    const combo3 = [];
    const combo4 = [];
    const combos = [this.combo1, this.combo2, this.combo3, this.combo4];
    //Get selected categories
    //Images
    if(this.selectedCategories[0]=="Abstrakt"){
      const imageCategory = this.abstract;
    }
    else if(this.selectedCategories[0]=="Dyr"){
      const imageCategory = this.animals;
    }
    else if(this.selectedCategories[0]=="Biler"){
      const imageCategory = this.cars;
    }

    //Sounds
    if(this.selectedCategories[1]=="Instrument"){
      const soundCategory = this.instrument;
    }
    else if(this.selectedCategories[1]=="Musikk"){
      const soundCategory = this.music;
    }
    else if(this.selectedCategories[1]=="Vær"){
      const soundCategory = this.weather;
    }

    //Text
    if(this.selectedCategories[2]=="Språk"){
      const textCategory = this.language;
    }
    else if(this.selectedCategories[2]=="One-liners"){
      const textCategory = this.oneliners;
    }
    else if(this.selectedCategories[2]=="Trump-quotes"){
      const textCategory = this.trump;
    }

    //Put random elements in different combinations
    for(x=0; x<5; <++){
      //Find and add random image to combo
      const randomImageIndex = Math.floor(Math.random()*this.imageCategory.length);
      const image1 = this.imageCategory[this.randomImageIndex];
      this.combos[x].push(this.image1);
      this.imageCategory.splice(this.randomImageIndex, 1);

      //Find and add random sound to combo
      const randomSoundIndex = Math.floor(Math.random()*this.soundCategory.length);
      const sound1 = this.soundCategory[this.randomSoundIndex];
      this.combos[x].push(this.sound1);
      this.soundCategory.splice(this.randomSoundIndex, 1);

      //Find and add random text to combo
      const randomTextIndex = Math.floor(Math.random()*this.textCategory.length);
      const text1 = this.textCategory[this.randomTextIndex];
      this.combos[x].push(this.text);
      this.textCategory.splice(this.randomTextIndex, 1);
    }

    //Must then pass on these four combinations to the ajax component

    render(){
        return (
            <div></div>
        )
    }
}

export default Randomizer;