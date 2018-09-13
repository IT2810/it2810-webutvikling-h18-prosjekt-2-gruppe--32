import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import CombinationButton from "./components/CombinationButton";
import AjaxHandler from "./components/ajaxHandler.js";
import Footer from "./components/Footer";
import CategoryButton from "./components/CategoryButton";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div id="container">
                    <div id="mediaContainer">
                        <div id="combinationMenu">
                            <CombinationButton/>
                            <CombinationButton/>
                            <CombinationButton/>
                            <CombinationButton/>
                        </div>
                        <AjaxHandler/>
                    </div>

                    <div id="mediaCategory">
                        <div id="categoryHeader">Kategorier</div>
                        <CategoryButton category1Name="Abstrakt" category2Name="Dyr" category3Name="Biler" categoryType="Image" categoryName="Bilder"/>
                        <CategoryButton category1Name="Intstrumenter" category2Name="Musikk" category3Name="Vær" categoryType="Sound" categoryName="Lyd"/>
                        <CategoryButton category1Name="Språk" category2Name="One-liners" category3Name="Trump-quotes" categoryType="Text" categoryName="Tekst"/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
