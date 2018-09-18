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
                    <svg width="100%" height="100%">
                        <circle className="combinationCircle" id={"combinationCircle" + this.props.tabNr} cx="50%" cy="50%" r="25"/>
                    </svg>
                </button>
            </React.Fragment>
        )

    }
}

export default TabDisplay;
