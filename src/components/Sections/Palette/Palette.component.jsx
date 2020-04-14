import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';

class Palette extends Component {
    render() {
        const {colors} = this.props.palette;
        const ColorBoxes = colors.map( color => (
            <ColorBox background={color.color} name={color.name}/>
        ))


        return (
            <div className='Palette'>
                {/** NAVBAR GOES HERE */}
                <div className='Palette-colors' >
                    {
                        ColorBoxes
                    }
                    {/** COLOR BOXES */}
                </div>
                {/** FOOTER GOES HERE */}
            </div>
        )
    }
}

export default Palette;
