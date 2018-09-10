import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import logo from "./logo.svg";
import logo2 from "./dickbutt.jpg";

class Test extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo2} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to intexpo. The world of oppotunities!</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
