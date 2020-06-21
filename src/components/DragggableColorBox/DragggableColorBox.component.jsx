import React from 'react';
import {ReactComponent as Remove} from '../../assets/images/delete.svg';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../../styles/DragggableColorBox.style';


const DraggableColorBox = SortableElement((props) => {
    const {classes, removeColor} = props;
    return (
        <div className={`${classes.root} flex flex-column jc-end ai-end`} style={{backgroundColor: props.color}}>
            <div className='bottom flex ai-center jc-sb'>
                <span className="name">
                    {props.name}
                </span>
                <Remove className='svg remove-color' onClick={removeColor}/>
            </div>
            

        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);