import React from 'react';
import '../style.css';
import CategoryButton from "./CategoryButton";

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.setImage = this.setImage.bind(this);
        this.setSound = this.setSound.bind(this);
        this.setText = this.setText.bind(this);
    }

    //setImage are sending the chosen imagecategory from CategoryButton, up to MediaRepresentation.js
    setImage(chosenCategory){
        this.props.setImg(chosenCategory);
    }

    //setSound are sending the chosen soundcategory from CategoryButton, up to MediaRepresentation.js
    setSound(chosenCategory){
        this.props.setSound(chosenCategory);
    }

    //setText are sending the chosen textcategory from CategoryButton, up to MediaRepresentation.js
    setText(chosenCategory){
        this.props.setText(chosenCategory);
    }


    render(){
        return(
            <React.Fragment>
                <CategoryButton setImage = {this.setImage} category1Name="Abstrakt" category2Name="Dyr" category3Name="Biler" categoryType="Bilder"/>
                <CategoryButton setSound = {this.setSound} category1Name="Instrumenter" category2Name="Musikk" category3Name="Vær" categoryType="Lyd"/>
                <CategoryButton setText = {this.setText} category1Name="One-liners" category2Name="Språk" category3Name="Trump-quotes" categoryType="Tekst"/>
            </React.Fragment>
        )
    }
}

export default Categories;