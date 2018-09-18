import React from 'react';
import '../style.css';

class TabDisplay extends React.Component {

    setTab(tabNr){
        this.props.updateTab(tabNr);
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={() => this.setTab(this.props.tabNr)} className="combinationButton" id={"combinationButton" + this.props.tabNr}>
                    <section className="comboText" id={"comboText"+this.props.tabNr} dangerouslySetInnerHTML={{__html: "Galleri " + this.props.tabNr}} />
                </button>
            </React.Fragment>
        )

    }
}

export default TabDisplay;
