import React from 'react';
import '../style.css';

class TabDisplay extends React.Component {

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