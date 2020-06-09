import React, { Component } from 'react';
import ColorBox from '../../Color-box/ColorBox.component';
import Header from '../../Header/Header.component';
import Footer from '../../Footer/Footer.component';
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
        height: '100%',
        fontSize: '20px',
    }
}

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
        const {classes} = this.props;
        const { level,format } = this.state;
        const { colors, paletteName,emoji, id } = this.props.palette;
        const ColorBoxes = colors[level].map( color => (
            <ColorBox
                showLink={true}
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                moreUrl={`/react-colors-project/palette/${id}/${color.id}`}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Header level={level} changeLevel={this.changeLevel} handleChangeColorType={this.handleChangeColorType} showSlider={true}/>
                <div className={classes.PaletteColors}>
                    {ColorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);
