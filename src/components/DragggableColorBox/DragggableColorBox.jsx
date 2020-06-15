import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: '25%',
        display: 'flex',
        flex: '0 1 20%',
        maxWidth: '20%',
        position: 'relative',
        cursor: 'pointer',
        textTransform: 'uppercase',
    }
}

function DraggableColorBox(props) {
    return (
        <div className={props.classes.root} style={{backgroundColor: props.color}}>
            <span className="name">
                {props.name}
            </span>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);