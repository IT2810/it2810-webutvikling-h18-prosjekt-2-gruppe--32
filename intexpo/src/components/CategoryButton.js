import React from 'react';
import '../style.css';

class CategoryButton extends React.Component{
    //Creating a constructor to set a state to the button if it clicked or not.

    constructor(props){
        super(props);

        this.state = {
            isclicked : false,
        };
    }

    handleClick(categoryType){
        //If you click one button while another is "open" and showing categories, this will close that one.
        document.getElementById("Bilder").style.display = "none";
        document.getElementById("Lyd").style.display = "none";
        document.getElementById("Tekst").style.display = "none";


        //Checking whether the "isclicked"-state    is true or false.s
        //False = open dropdown | True = close dropdown
        if(!this.state.isclicked){
            document.getElementById(categoryType).style.display = "flex";
            this.state.isclicked = true;
        }
        else{
            document.getElementById(categoryType).style.display = "none";
            this.state.isclicked = false;
        }
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
                {/* Creating a button for each category (Bilder, lyd, tekst)
                    When the button is  clicked, the function handleClick is called.*/}

                <button id="dropdownButton" onClick={() => this.handleClick(this.props.categoryType)}>{this.props.categoryType}</button>

                {/*The div with id=this.props.categoryNameID has orginially display:none. When handleClick is called, display changes to flex*/}

                <div id={this.props.categoryType}>

                    {/*Creating 3 buttons for each category.
                       When a button is clicked, the setList function is called, with the chosen category as parameter*/}

                    <button className="categoryChoose" onClick={() => this.setList(this.props.category1Name)}>{this.props.category1Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category2Name)}>{this.props.category2Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category3Name)}>{this.props.category3Name}</button>

                </div>
            </React.Fragment>
        )
    }
}

export default CategoryButton;