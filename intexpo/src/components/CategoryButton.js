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

        document.getElementById("Image").style.display = "none";
        document.getElementById("Sound").style.display = "none";
        document.getElementById("Text").style.display = "none";

        //Checking whether the "isclicked"-state is true or false.
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

    callRandomizer(){
        alert("Test");
        //CALL RANDOMIZER
    }

    render(){
        return(
            <React.Fragment>
                {/* Creating a button for each category (Bilder, lyd, tekst)
                    When the button is  clicked, the function handleClick is called.*/}

                <button id="dropdownButton" onClick={() => this.handleClick(this.props.categoryType)}>{this.props.categoryName}</button>

                {/*The div with id=this.props.categoryNameID has orginially display:none. When handleClick is called, display changes to flex*/}

                <div id={this.props.categoryType}>

                        {/*Creating 3 buttons for each category.
                           When a button is clicked, the callRandomizer function is called.
                           The name of the radiobutton (the label), uses props for setting the name.*/}

                        <button className="categoryChoose" onClick={() => this.callRandomizer()}>{this.props.category1Name}</button>
                        <button className="categoryChoose" onClick={() => this.callRandomizer()}>{this.props.category2Name}</button>
                        <button className="categoryChoose" onClick={() => this.callRandomizer()}>{this.props.category3Name}</button>
                </div>
            </React.Fragment>

        )
    }
}

export default CategoryButton;