import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {ReactComponent as Icon} from '../../../assets/images/palette.svg';
import GoBack from '../../../assets/images/back.png';
import DraggableColorList from '../../DraggableColorList/DraggableColorList.component';
import arrayMove from 'array-move';
import {ReactComponent as Close} from '../../../assets/images/close-button.svg';
import styles from '../../../styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            opened: false,
            overlayOpen: false,
            popPaletteFormOpen:false,
            defaultColor: 'teal',
            newName: 'Teal',
            newPaletteName: '',
            colors: [
                {
                    id: 'blue',
                    color: 'blue',
                    name:'blue'
                }
            ]
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            const sameName = ({name}) => name.toLowerCase() !== value.toLowerCase();
            return this.state.colors.every(sameName);
        });
        ValidatorForm.addValidationRule('isColorUnique', value => {
            const sameColor = ({color}) => color !== this.state.defaultColor;
            return this.state.colors.every(sameColor);
        });
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            const samePaletteNames = ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase();
            return  this.props.palettes.every(samePaletteNames);
        });
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };


    toggleSidebar = () => {
        this.setState({
            opened: !this.state.opened
        })
    }
    changeColor = (newColor) => {
        this.setState({
            defaultColor: newColor.hex
        })
    }
    handleChange = evt => {
        this.setState({newName: evt.target.value})        
    }
    handlePaletteNameChange = evt => {
        this.setState({newPaletteName: evt.target.value})
    }
    addColor = () => {
        const newColor = {
            id:  this.state.newName.toLowerCase().replace(/ /g, '_'),
            color: this.state.defaultColor,
            name: this.state.newName,
        }
        this.setState({
            colors: [...this.state.colors,newColor],
            newName: ''
        })
    }
    GoBack = () => {
        this.props.history.push('/react-colors-project');
    }
    handleSavePalette = () => {
        let namePalette = this.state.newPaletteName;
        const newPalette = {
            paletteName: namePalette,
            id:  namePalette.toLowerCase().replace(/ /g, '_'),
            colors: this.state.colors,
        }
        this.props.savePalette(newPalette);
        this.props.history.push('/react-colors-project')
    }
    popPaletteForm = () => {
        this.setState({
            overlayOpen: !this.state.overlayOpen,
            popPaletteFormOpen: !this.state.popPaletteFormOpen
        })
    }
    removeColor = (colorName) => {
        console.log(colorName);
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }

    render() {
        const {opened, defaultColor,colors, newName,overlayOpen,popPaletteFormOpen, newPaletteName} = this.state;
        const {classes} = this.props;        
        return (
            <div className={`${classes.PaletteForm} ${overlayOpen === true ? 'active' : ''} flex jc-end`}>
                <div className={`overlay ${overlayOpen === true ? 'active' : ''}`} onClick={this.popPaletteForm}></div>
                <div className={`${classes.Side} ${opened === true ? 'active' : ''}`}>
                    <div className={`${classes.Top} flex ai-center jc-end`} onClick={this.toggleSidebar}>
                       <img src={GoBack} alt="go back"/>
                    </div>
                    <div className={`${classes.colorPickerWrapper} flex ai-center jc-center`}>
                       <div className="wrapper">
                            <h2 className="label">Design your palette</h2>
                            <div className="buttons-wrapper flex ai-center">
                                <Button variant="contained" color="secondary">
                                    clear palette
                                </Button>
                                <Button variant="contained" color="primary">
                                    random color
                                </Button>
                            </div>
                            <div className={`${classes.ColorPicker}`}>
                                <ChromePicker color={defaultColor} onChangeComplete={this.changeColor}/>
                            </div>
                            <div className={`${classes.inputWrapper}`}>
                                <ValidatorForm onSubmit={this.addColor} className='flex flex-column jc-start ai-start'>
                                    <TextValidator
                                        value ={newName}
                                        onChange= {this.handleChange}
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
                                     <Button variant="contained" color="primary" style={{backgroundColor: defaultColor}} type='submit'>
                                    Add Color
                                    </Button>
                                </ValidatorForm>
                            </div>
                       </div>
                    </div>
                </div>
                <div className={`${classes.MainContent} ${opened === true ? 'active' : ''}`}>
                    <div className={`${classes.AppNav} flex jc-sb ai-center'`}>
                        <div className='left flex ai-center'>
                            <div className={`${classes.Create} flex ai-center`} onClick={this.toggleSidebar}>
                                <Icon className='svg'/>
                                <span>Create A palette</span>
                            </div>
                        </div>
                        <div className="right buttons flex ai-center">
                            <Button variant="contained" color="secondary" onClick={this.GoBack}>
                                Go back
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.popPaletteForm}>
                                Save Palette
                            </Button>
                        </div>
                    </div>
                    <DraggableColorList
                        className={`${classes.content} flex ai-start flex-wrap`}
                        colors={colors}
                        removeColor={this.removeColor}
                        axis='xy'
                        onSortEnd ={this.onSortEnd}
                        pressDelay={0}
                        transitionDuration={400}
                    />
                </div>
                <div className={`save-palette-form ${popPaletteFormOpen === true ? 'active' : ''}`}>
                        <Close className='svg close-icon' onClick={this.popPaletteForm}/>
                        <ValidatorForm onSubmit={this.handleSavePalette} className='flex flex-column jc-sb ai-start'>
                            <div className='top'>
                                <h3 className='title'>Choose A Palette Name</h3>
                                <p>Please enter a name for your new palette. it needs to be unique!</p>
                                <TextValidator
                                    label='Palette Name'
                                    value ={newPaletteName}
                                    onChange= {this.handlePaletteNameChange}
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
                                <Button variant="contained" onClick={this.popPaletteForm}>close</Button>
                                <Button variant="contained" color="primary" style={{backgroundColor: defaultColor}} type='submit'>
                                    Add Palette
                                </Button>
                            </div>
                        </ValidatorForm>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);
