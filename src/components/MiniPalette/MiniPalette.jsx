import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MiniPaletteStyles';

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, goToPalette } = props;
    const miniColorBoxes  =  colors.map( color => (<span className={classes.singleColor} key={color.color} style={{background: color.color}}></span>))
    return (
        <div className={`flex flex-wrap ${classes.minipalette}`} onClick = {goToPalette}>
            <div className={`flex ai-center flex-wrap ${classes.colors}`}>
                {miniColorBoxes}
            </div>
            <div className={`flex ai-center jc-sb ${classes.bottomPart}`}>
            <h3 className={classes.name}>{paletteName}</h3>
            <p className={classes.emoji}>{emoji}</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);