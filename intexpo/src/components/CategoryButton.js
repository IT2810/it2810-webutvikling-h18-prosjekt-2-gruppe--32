import React from 'react';
import '../style.css';

class CategoryButton extends React.Component{
    //Creating a constructor to set a state to the button if it clicked or not.

    constructor(props){
        super(props);

        this.state = {
            chosen : "",
        };
    }

    //set the startup-categories to be "chosen" (changed background-color)
    componentDidMount(){
        this.setColor("Abstrakt", "Bilder");
        this.setColor("Instrumenter", "Lyd");
        this.setColor("One-liners", "Tekst");
    }

    //setColor are changing the background-color of the chosen category
    setColor(chosenCategory, categoryType){
        document.getElementById("btn1"+categoryType).style.backgroundColor = "rgb(220, 220, 220)";
        document.getElementById("btn2"+categoryType).style.backgroundColor = "rgb(220, 220, 220)";
        document.getElementById("btn3"+categoryType).style.backgroundColor = "rgb(220, 220, 220)";
        this.setState({chosen : chosenCategory}, function () {
            console.log(this.state.chosen);
            if(this.state.chosen === this.props.category1Name){
                document.getElementById("btn1"+categoryType).style.backgroundColor = "rgb(59, 191, 116)";
            }
            if(this.state.chosen === this.props.category2Name){
                document.getElementById("btn2"+categoryType).style.backgroundColor = "rgb(59, 191, 116)";
            }
            if(this.state.chosen === this.props.category3Name){
                document.getElementById("btn3"+categoryType).style.backgroundColor = "rgb(59, 191, 116)";
            }
        })
    }

    //setList checks the current categoryType, and thereby sends the chosen category to Categories.js
    setList(chosenCategory){
        if(this.props.categoryType === "Bilder"){
            this.props.setImage(chosenCategory);
            this.setColor(chosenCategory, "Bilder");
        }
        if(this.props.categoryType === "Lyd"){
            this.props.setSound(chosenCategory);
            this.setColor(chosenCategory, "Lyd");
        }
        if(this.props.categoryType === "Tekst"){
            this.props.setText(chosenCategory);
            this.setColor(chosenCategory, "Tekst");
        }
    }

    render(){
        return(
            <React.Fragment>
                <button id="categoryButton">{this.props.categoryType}</button>
                <section id={this.props.categoryType}>
                    <button id={"btn1"+this.props.categoryType} className="categoryChoose" onClick={() => this.setList(this.props.category1Name)}>{this.props.category1Name}</button>
                    <button id={"btn2"+this.props.categoryType} className="categoryChoose" onClick={() => this.setList(this.props.category2Name)}>{this.props.category2Name}</button>
                    <button id={"btn3"+this.props.categoryType} className="categoryChoose" onClick={() => this.setList(this.props.category3Name)}>{this.props.category3Name}</button>
                </section>
            </React.Fragment>
        )
    }
}

export default CategoryButton;