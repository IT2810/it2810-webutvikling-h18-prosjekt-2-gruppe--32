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
                    <section id="comboText" dangerouslySetInnerHTML={{__html: "Kombinasjon " + this.props.tabNr}} />
                </button>
            </React.Fragment>
        )

    }
}

export default TabDisplay;