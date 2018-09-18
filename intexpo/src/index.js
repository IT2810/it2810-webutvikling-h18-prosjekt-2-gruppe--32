import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import MediaRepresentation from "./components/MediaRepresentation";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <MediaRepresentation/>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
