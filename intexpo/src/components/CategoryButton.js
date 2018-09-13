import React from 'react';
import '../style.css';

class CategoryButton extends React.Component{
    handleClick(categoryName){
        document.getElementById("ImageCategories").style.display = "none";
        document.getElementById("SoundCategories").style.display = "none";
        document.getElementById("TextCategories").style.display = "none";

        if(categoryName === "Bilder"){
            document.getElementById("ImageCategories").style.display = "flex";
        }
        else if (categoryName === "Lyd"){
            document.getElementById("SoundCategories").style.display = "flex";
        }
        else if (categoryName === "Tekst"){
            document.getElementById("TextCategories").style.display = "flex";
        }
    }

    callRandomizer(){
        //CALL RANDOMIZER
    }

    render(){
        return(
            <React.Fragment>
                <button id="dropdownButton" onClick={() => this.handleClick(this.props.categoryName)}>{this.props.categoryName}</button>
                <div id={this.props.categoryNameID}>
                    <div id="category1" className="dropdownContent">
                        <input type="radio" id="radio1" name="radioCategory" onClick={this.callRandomizer}/>
                        <label htmlFor="radio1">{this.props.category1Name}</label>
                    </div>

                    <div id="category2" className="dropdownContent">
                        <input type="radio" id="radio2" name="radioCategory" onClick={this.callRandomizer}/>
                        <label htmlFor="radio2">{this.props.category2Name}</label>
                    </div>

                    <div id="category3" className="dropdownContent">
                        <input type="radio" id="radio3" name="radioCategory" onClick={this.callRandomizer}/>
                        <label htmlFor="radio3">{this.props.category3Name}</label>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default CategoryButton;