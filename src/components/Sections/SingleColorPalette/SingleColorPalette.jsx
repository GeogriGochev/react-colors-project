import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';

 class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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

    render() {
        const colorBoxes = this._shades.map( color => (
            <ColorBox name={color.name} key={color.id} background={color.hex} showLink={false}/>
        ))
        return (
            <div className='Palette'>
                <h1>Single color boxes</h1>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette;
