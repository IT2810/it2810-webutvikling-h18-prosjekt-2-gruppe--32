import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import Category from "./components/Category";
import MediaRepresentation from "./components/MediaRepresentation";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="mediaContainer">
                        <div className="comboMenu">
                            <Category/>
                            <Category/>
                            <Category/>
                            <Category/>
                        </div>
                        <div className="mediaPictureContainer">
                            <MediaRepresentation/>
                        </div>
                        <div className="mediaTextContainer">
                            <p className="mediaText">MEDIATEXT</p>
                        </div>
                    </div>

                    <div className="mediaCategory">
                        MEDIAKATEGORIER

                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();