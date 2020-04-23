import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';


const styles = {
    minipalette: {
        flex: '0 1 30%',
        maxWidth: '30%',
        background: 'White',
        borderRadius: '10px',
        padding: '10px',
        position: 'relative',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
        marginBottom: '30px',
        '& a' : {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '1'
        }
    },
    colors: {
        width: '100%'
    },
    singleColor: {
        flex: ' 0 1 20%',
        maxWidth: '20%',
        height: '40px',
        display: 'flex'
    },
    bottomPart: {
        width: '100%'
    }

}


function MiniPalette(props) {
    const { classes, paletteName, id, emoji, colors } = props;
    return (
        <div className={`flex flex-wrap ${classes.minipalette}`}>
            <Link to={`/react-colors-project/palette/${id}`}></Link>
            <div className={`flex ai-center flex-wrap ${classes.colors}`}>
                {
                    colors.map( color => (
                        <span className={classes.singleColor} style={{background: color.color}}></span>
                    ))
                }
            </div>
            <div className={`flex ai-center jc-sb ${classes.bottomPart}`}>
            <h3 className={classes.name}>{paletteName}</h3>
            <p className={classes.emoji}>{emoji}</p>
            </div>
            

        </div>
    )
}

export default withStyles(styles)(MiniPalette);