import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import {Link} from 'react-router-dom';
import Header from '../../Header/Header.component';
import PaletteFooter from '../../PaletteFooter/PaletteFooter';
import { withStyles } from '@material-ui/styles';


const styles = {
    Palette: {
        height: 'calc(100vh - 150px)',
    },
    PaletteColors: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: ' wrap',
        height: '100%'
    },
    ColorBox: {
        height: '50%',
        display: 'flex',
        flex: '0 1 20%',
        maxWidth: '20%',
        position: 'relative',
        cursor: 'pointer',
        textTransform: 'uppercase',
        '&:hover': {
            copyButton: {
                opacity: '1',
            }
        },
        '&.black': {
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '&.black a': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            color: 'white'
        }
    },
}

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
        const {classes} = this.props;
        const {format} = this.state;
        const {paletteName,emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map( color => (
            <ColorBox big={true} name={color.name} key={color.id} background={color[format]} showLink={false}/>
        ))
        return (
            <div className={classes.Palette}>
                <Header handleChangeColorType={this.handleChangeColorType} showSlider={false}/>
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={`${classes.ColorBox} black`}>
                        <Link to={`/react-colors-project/palette/${id}`} className='copy-button back'>Go back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
