import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Remove} from '../../assets/images/delete-w.svg';
import styles from '../../styles/MiniPaletteStyles';

class MiniPalette extends Component {
    constructor(props) {
        super(props)
        this.deletePalette = this.deletePalette.bind(this);
    }

    
    deletePalette() {        
        this.props.deletePalette(this.props.id)
    }

    render() {
        const { classes, paletteName, emoji, colors, goToPalette} = this.props;
        const miniColorBoxes  =  colors.map( color => (<span className={classes.singleColor} key={color.color} style={{background: color.color}}></span>))
        return (
            <div className={`${classes.boxMiniPalette}`}>
                <div className={`${classes.minipalette}`}>
                    <div className={`${classes.removeMiniPalette} flex ai-center remove jc-center`} onClick={this.deletePalette}>
                        <Remove className='svg remove-color'/>
                    </div>
                    <div className='content flex flex-wrap'  onClick = {goToPalette}>
                        <div className={`flex ai-center flex-wrap ${classes.colors}`}>
                            {miniColorBoxes}
                        </div>
                        <div className={`flex ai-center jc-sb ${classes.bottomPart}`}>
                            <h3 className={classes.name}>{paletteName}</h3>
                            <p className={classes.emoji}>{emoji}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);