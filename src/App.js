import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Sections/Palette/Palette.component';
import seedColors from './data/seedColors';
import { generatePalette } from './data/colorHelpers';
import PaletteList from './components/Sections/PaletteList/PaletteList';
import SingleColorPalette from './components/Sections/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './components/Sections/NewPaletteForm/NewPaletteForm';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            palettes: seedColors
        }
    }

  findPalette = (id) => {
        return this.state.palettes.find(function(palette){
            return palette.id === id;
        })
  }

  savePalette = (newPalette) => {
      this.setState({
          palettes: [...this.state.palettes, newPalette]
      })
    console.log(newPalette);    
  }


  render() {    
    return (
      <Switch>
        {/** root */}
        <Route 
            exact 
            path={`/react-colors-project/`} 
            render ={
                (routeProps) =><PaletteList palettes={this.state.palettes} {...routeProps}/>
            }
        />
        {/** create palette */}
        <Route 
            exact 
            path='/react-colors-project/palette/new' 
            render={ (routerProps) => <NewPaletteForm palettes={this.state.palettes} savePalette={this.savePalette} {...routerProps}/>} 
        />
        {/** single palette box */}
        <Route 
            exact
            path={`/react-colors-project/palette/:id`}
            render={
                routerProps => (
                <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}/>
                )
            }
        />        
        {/** inner palette color variations*/}
        <Route 
            exact
            path={`/react-colors-project/palette/:paletteId/:colorid`}
            render={
                routerProps => (
                <SingleColorPalette
                    colorId={routerProps.match.params.colorid}
                    palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))}/>
                )
            }
        />
      </Switch>
    )
  }
}

export default App;
