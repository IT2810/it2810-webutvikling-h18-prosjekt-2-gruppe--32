import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import CombinationButton from "./components/CombinationButton";
import MediaRepresentation from "./components/MediaRepresentation";
import Footer from "./components/Footer";
import CategoryButton from "./components/CategoryButton";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="mediaContainer">
                        <div className="combinationMenu">
                            <CombinationButton/>
                            <CombinationButton/>
                            <CombinationButton/>
                            <CombinationButton/>
                        </div>
                        <div className="mediaPictureContainer">
                            <MediaRepresentation/>
                        </div>
                        <div className="mediaTextContainer">
                            <p className="mediaText"></p>
                        </div>
                    </div>

                    <div className="mediaCategory">
                        <div className="categoryHeader">Kategorier</div>
                        <CategoryButton categoryName="Bilder"/>
                        <CategoryButton categoryName="Lyd"/>
                        <CategoryButton categoryName="Tekst"/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();