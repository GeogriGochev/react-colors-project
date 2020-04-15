import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import Header from '../../Header/Header.component';

class Palette extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = level => {
        this.setState({ level })
    }

    handleChangeColorType = val => {
        this.setState({
            format: val
        })
    }


    render() {
        const {level,format} = this.state;
        const {colors} = this.props.palette;
        const ColorBoxes = colors[level].map( color => (
            <ColorBox background={color[format]} name={color.name} step={100}/>
        ))
        return (
            <div className='Palette'>
                <Header level={level} changeLevel={this.changeLevel} handleChangeColorType={this.handleChangeColorType}/>
                <div className='Palette-colors'>
                    {ColorBoxes}
                </div>
                {/** FOOTER GOES HERE */}
            </div>
        )
    }
}

export default Palette;
