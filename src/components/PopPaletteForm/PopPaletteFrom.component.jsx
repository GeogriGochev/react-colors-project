import React from 'react';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import {ReactComponent as Close} from '../../assets/images/close-button.svg';
import styles from '../../styles/NewPaletteFormStyles';

function PopPaletteForm(props) {

    return (
        <div className={`save-palette-form ${props.popPaletteFormOpen === true ? 'active' : ''}`}>
            <Close className='svg close-icon' onClick={props.popPaletteForm}/>
            <ValidatorForm onSubmit={props.handleSavePalette} className='flex flex-column jc-sb ai-start'>
                <div className='top'>
                    <h3 className='title'>Choose A Palette Name</h3>
                    <p>Please enter a name for your new palette. it needs to be unique!</p>
                    <TextValidator
                        label='Palette Name'
                        value ={props.newPaletteName}
                        onChange= {props.handlePaletteNameChange}
                        validators={[
                            'required',
                            'isPaletteNameUnique'
                        ]}
                        errorMessages={[
                            'Enter A Palette Name',
                            'Palete Name not unique!'
                        ]}
                    />
                </div>
                <div className='buttons-wrapper flex ai-center'>
                    <Button variant="contained" onClick={props.popPaletteForm}>close</Button>
                    <Button variant="contained" color="primary" style={{backgroundColor: props.defaultColor}} type='submit'>
                        Add Palette
                    </Button>
                </div>
            </ValidatorForm>
        </div>
    )
}

export default withStyles(styles)(PopPaletteForm);