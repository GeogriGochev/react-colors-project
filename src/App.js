import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Sections/Palette/Palette.component';
import seedColors from './data/seedColors';
import { generatePalette } from './data/colorHelpers';

class App extends Component {
  findPalette = (id) => {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  render() {    
    return (
      <Switch>
        <Route exact path='/react-colors-project'/>
        <Route 
          path='/react-colors-project/palette/:id'
          render={
            routerProps => (
              <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}/>
            )
          }
        />
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    )
  }
}

export default App;
