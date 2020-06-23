import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from '../../styles/NewPaletteFormStyles';
import {ReactComponent as Icon} from '../../assets/images/palette.svg';

function PaletteFormNav(props) {
    return (
        <div className={`${props.classes.AppNav} flex jc-sb ai-center'`}>
            <div className='left flex ai-center'>
                <div className={`${props.classes.Create} flex ai-center`} onClick={props.toggleSidebar}>
                    <Icon className='svg'/>
                    <span>Create A palette</span>
                </div>
            </div>
            <div className="right buttons flex ai-center">
                <Button variant="contained" color="secondary" onClick={props.GoBack}>
                    Go back
                </Button>
                <Button variant="contained" color="primary" onClick={props.popPaletteForm}>
                    Save Palette
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteFormNav)