import React from 'react';
import axios from 'axios';
import '../style';

// sets example paths
const elementsToBeLoaded = {
  imagePath: 'cars/1280086312.svg',
  textPath = 'Trump-quotes/Trump-quote1.json',
  soundPath = 'sounds/instruments/bagpipe.mp3'
}

class ajaxHandler extends React.Component {
    state = {
      const elementsToBeLoaded = {imagePath, textPath, soundPath};
    }

    componentDidMount() {
      for (let element in elementsToBeLoaded) {
        axios.get('../assets' + filepath).then(
          res => {
            const loadedElement = res.data.data.children.map(obj => obj.data);
            if (element[-4] === '.svg') {
              Object.assign(loadedElements, 'image', obj.data);
            }
            else if (element[-5] === '.json') {
              Object.assign(loadedElements, 'text', obj.data);
            }
            else if (element[-4] === '.mp3') {
              Object.assign(loadedElements, 'sound', obj.data);
            }
          }
        );
      }
      this.setState({ loadedElements });
    }
}
