import React from 'react';
import '../style.css';

class CategoryButton extends React.Component{
    //Creating a constructor to set a state to the button if it clicked or not.

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

                <button class="dropdownButton">{this.props.categoryType}</button>

                {/*The div with id=this.props.categoryNameID has orginially display:none. When handleClick is called, display changes to flex*/}

                <section id={this.props.categoryType}>

                    {/*Creating 3 buttons for each category.
                       When a button is clicked, the setList function is called, with the chosen category as parameter*/}

                    <button className="categoryChoose" onClick={() => this.setList(this.props.category1Name)}>{this.props.category1Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category2Name)}>{this.props.category2Name}</button>
                    <button className="categoryChoose" onClick={() => this.setList(this.props.category3Name)}>{this.props.category3Name}</button>

                </section>
            </React.Fragment>
        )
    }
}

export default CategoryButton;
