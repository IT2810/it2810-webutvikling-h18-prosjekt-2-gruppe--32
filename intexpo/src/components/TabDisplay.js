import React from 'react';
import '../style.css';
import MediaRepresentation from "./MediaRepresentation";

class TabDisplay extends React.Component {

    constructor(props){
        super(props);
    }

    setTab(tabNr){
        this.props.updateTab(tabNr);
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={() => this.setTab(this.props.tabNr)} id="combinationButton">
                    <div id="comboLine"/>
                    <svg height="100%" width="100%">
                        <circle id="categoryCircle" cx="50%" cy="50%" r="25" fill="rgba(170,0,0,0.8)"/>
                    </svg>
                </button>
            </React.Fragment>
        )

    }
}

export default TabDisplay;