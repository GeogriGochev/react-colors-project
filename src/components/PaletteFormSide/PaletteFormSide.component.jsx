import React from 'react';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import GoBack from '../../assets/images/back.png';
import styles from '../../styles/NewPaletteFormStyles';

function PaletteFormSide(props) {

    return (
        <div>
            <div className={`${props.classes.Top} flex ai-center jc-end`} onClick={props.toggleSidebar}>
                <img src={GoBack} alt="go back"/>
            </div>
            <div className={`${props.classes.colorPickerWrapper} flex ai-center jc-center`}>
                <div className="wrapper">
                    <h2 className="label">Design your palette</h2>
                    <div className="buttons-wrapper flex ai-center">
                        <Button variant="contained" color="secondary" onClick={props.clearPalette}>
                            clear palette
                        </Button>
                        <Button disabled={props.maxColorsReached} variant="contained" color="primary" onClick={props.addRandomColor}>
                            {props.maxColorsReached ? 'Palette full' : 'random color'}
                        </Button>
                    </div>
                    <div className={`${props.classes.ColorPicker}`}>
                        <ChromePicker color={props.defaultColor} onChangeComplete={props.changeColor}/>
                    </div>
                    <div className={`${props.classes.inputWrapper}`}>
                        <ValidatorForm onSubmit={props.addColor} className='flex flex-column jc-start ai-start'>
                            <TextValidator
                                value ={props.newName}
                                onChange= {props.handleChange}
                                validators={[
                                    'required',
                                    'isColorNameUnique',
                                    'isColorUnique'
                                ]}
                                errorMessages={[
                                    'Enter a color name',
                                    'Color name is not unique...',
                                    'Color already used!'
                                ]}
                            />
                            <Button disabled={props.maxColorsReached} variant="contained" color="primary" style={{backgroundColor: props.defaultColor}} type='submit'>
                                {props.maxColorsReached ? 'Palette full' : 'Add Color'}
                            </Button>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteFormSide)