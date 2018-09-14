import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import CombinationButton from "./components/CombinationButton";
import AjaxHandler from "./components/ajaxHandler.js";
import Footer from "./components/Footer";
import CategoryButton from "./components/CategoryButton";
import Categories from "./components/Categories";

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
                        <Categories/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();