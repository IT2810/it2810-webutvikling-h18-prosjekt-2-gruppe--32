import React from 'react';
import '../style.css';

class CategoryButton extends React.Component{
    //Creating a constructor to set a state to the button if it clicked or not.

    constructor(props){
        super(props);

    }

    setList(chosenCategory){
        //Passing the chosen cateogory through setImage, setSound and setText up to Categories.js
        if(this.props.categoryType === "Bilder"){
            this.props.setImage(chosenCategory);
        }
        if(this.props.categoryType === "Lyd"){
            this.props.setSound(chosenCategory);
        }
        if(this.props.categoryType === "Tekst"){
            this.props.setText(chosenCategory);
        }
    }

    render(){
        return(
            <React.Fragment>
                <button id="categoryButton">{this.props.categoryType}</button>
                <section id={this.props.categoryType}>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category1Name)}>{this.props.category1Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category2Name)}>{this.props.category2Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category3Name)}>{this.props.category3Name}</button>
                </section>
            </React.Fragment>
        )
    }
}

export default CategoryButton;
