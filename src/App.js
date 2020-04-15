import React, { Component } from 'react';
import Palette from './components/Sections/Palette/Palette.component';
import seedColors from './data/seedColors';
import { generatePalette } from './data/colorHelpers';

class App extends Component {
  render() {    
    return (
      <div >
        <Palette palette={generatePalette(seedColors[4])}/>
      </div>
    )
  }
}

export default App;
