import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import Header from '../../Header/Header.component';

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
                <Header level={level} changeLevel={this.changeLevel}/>
                <div className='Palette-colors' >
                    {ColorBoxes}
                </div>
                {/** FOOTER GOES HERE */}
            </div>
        )
    }
}

export default Palette;
