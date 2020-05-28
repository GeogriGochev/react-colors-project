import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import Header from '../../Header/Header.component';
import PaletteFooter from '../../PaletteFooter/PaletteFooter';

 class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: 'hex'
        }
    }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        // return all shades of given color
        return shades.slice(1);
    }

    
    handleChangeColorType = val => {
        this.setState({
            format: val
        })
    }

    render() {
        const {format} = this.state;
        const {paletteName,emoji} = this.props.palette;
        const colorBoxes = this._shades.map( color => (
            <ColorBox name={color.name} key={color.id} background={color[format]} showLink={false}/>
        ))
        return (
            <div className='Palette'>
                <Header handleChangeColorType={this.handleChangeColorType} showSlider={false}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default SingleColorPalette;
