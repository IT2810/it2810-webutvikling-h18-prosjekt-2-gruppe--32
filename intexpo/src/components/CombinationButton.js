import React from 'react';
import '../style.css';

class CombinationButton extends React.Component {
    render(){
        return (
            <button className="combinationButton">
                <div className="comboLine"/>
                <svg height="100%" width="100%">
                    <circle className="categoryCircle" cx="50%" cy="50%" r="25" fill="rgba(170,0,0,0.8)"/>
                </svg>
            </button>
        )
    }
}

export default CombinationButton;