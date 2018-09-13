import React from 'react';
// axios is used for AJAX calls
import axios from 'axios';

// sets example props
const props = {
  imagePath: 'cars/1280086312.svg',
  textPath: 'Trump-quotes/Trump-quote1.json',
  soundPath: 'sounds/instruments/bagpipe.mp3'
}

class AjaxHandler extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    for (let element in props) {
      // checks if file is already in sessionStorage
      if (sessionStorage.getItem('element')) {
        console.log(element + ' is already in storage, no need to load')
      }

      // performs AJAX call with axios if file is not in sessionStorage
      else {
        axios.get('../assets' + element).then(
          res => {
            const loadedElement = res.data.data.children.map(obj => obj.data);
            // media element is saved to sessionStorage with filepath as key
            sessionStorage.setItem(element, loadedElement);
          }
        );
      }
    }
  }

// the code below should not be working properly
  render() {
    return(
      <React.Fragment>
        <section className="picFrame">
          <img class="mainImage" src="sessionStorage.getItem(props.imagePath)">
          </img>
        </section>
        <section id="mediaTextContainer">
          <p id="mediaText">
            Her burde det vært trump-quotes
          </p>
        </section>
      </React.Fragment>
    )
  }
}

export default AjaxHandler;
