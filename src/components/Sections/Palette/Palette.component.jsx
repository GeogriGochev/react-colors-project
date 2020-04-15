import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            level: 500
        }
    }

    changeLevel = level => {
        this.setState({ level })
    }


    render() {
        const {level} = this.state;
        const {colors} = this.props.palette;
        const ColorBoxes = colors[level].map( color => (
            <ColorBox background={color.hex} name={color.name} step={100}/>
        ))
        return (
            <div className='Palette'>
                <Slider
                    defaultValue={level}
                    min={100}
                    step={100}
                    max={900}
                    onAfterChange={this.changeLevel}
                />
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
