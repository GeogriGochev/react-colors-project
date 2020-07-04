import React from 'react';
import DraggableColorBox from '../DragggableColorBox/DragggableColorBox.component';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import {SortableContainer} from 'react-sortable-hoc';
import styles from '../../styles/NewPaletteFormStyles';

const DraggableColorList = SortableContainer(({colors, classes, removeColor}) => {
    const listBoxes = colors.map( (color , i) => (
        <CSSTransition key={color.id} classNames='fade' timeout={500}>
            <DraggableColorBox
                color={color.color}
                index ={i}
                key={color.id}
                name={color.name}
                removeColor={ () => removeColor(color.name)}
            />
        </CSSTransition>
    ))
    return (
        <TransitionGroup className={`${classes.content} flex ai-start flex-wrap`}>
            {listBoxes}
        </TransitionGroup>
    ) 
})
export default withStyles(styles)(DraggableColorList);