import React from 'react';
import DraggableColorBox from '../DragggableColorBox/DragggableColorBox.component';
import { withStyles } from '@material-ui/styles';
import {SortableContainer} from 'react-sortable-hoc';
import styles from '../../styles/NewPaletteFormStyles';

const DraggableColorList = SortableContainer(({colors, classes, removeColor}) => {
    const listBoxes = colors.map( (color , i) => (
        <DraggableColorBox
            color={color.color}
            index ={i}
            key={color.id}
            name={color.name}
            removeColor={ () => removeColor(color.name)}
        />
    ))
    return (
        <div className={`${classes.content} flex ai-start flex-wrap`} >
        {
            listBoxes
        }
        </div>
    ) 
})
export default withStyles(styles)(DraggableColorList);