import React from 'react';
import '../style.css';

class TabDisplay extends React.Component {

    //setTab is a simple function that are sending the currentTabNr back to MediaRepresentation.js
    setTab(tabNr){
        this.props.updateTab(tabNr);
    }

    render(){
        return (
             <React.Fragment>
                 {/*comboTextLarge is hidden when the screen fits for mobile and small devices*/}
                 <button onClick={() => this.setTab(this.props.tabNr)} className="combinationButton" id={"combinationButton" + this.props.tabNr}>
                    <section className="comboTextLarge" id={"comboTextLarge"+this.props.tabNr} dangerouslySetInnerHTML={{__html: "Kombinasjon " + this.props.tabNr}} />
                    <section className="comboTextSmall" id={"comboTextSmall"+this.props.tabNr} dangerouslySetInnerHTML={{__html: this.props.tabNr}} />
                </button>
            </React.Fragment>
        )
    }
}

export default TabDisplay;