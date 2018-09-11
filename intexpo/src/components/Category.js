import React from 'react';
import '../style.css';

class Category extends React.Component {
    render(){
        return (
            <button id="combinationButton">
                <div id="comboLine"></div>
                <svg height="100%" width="100%">
                    <circle className="categoryCircle" cx="50%" cy="50%" r="25" fill="rgba(170,0,0,0.8)"></circle>
                </svg>
            </button>
        )
    }
}

export default Category;