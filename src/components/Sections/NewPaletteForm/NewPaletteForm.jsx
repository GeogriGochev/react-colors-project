import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Icon} from '../../../assets/images/palette.svg';
import GoBack from '../../../assets/images/back.png';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from '../../../styles/NewPaletteFormStyles';
import DraggableColorBox from '../../DragggableColorBox/DragggableColorBox';

class NewPaletteForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            opened: false,
            defaultColor: 'teal',
            newName: 'Teal',
            colors: [{color: 'blue', name:'blue'}]
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
    }


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
    handleChange = (evt) => {
        this.setState({newName: evt.target.value})        
    }
    addColor = () => {
        const newColor = {
            color: this.state.defaultColor,
            name: this.state.newName,
        }
        this.setState({
            colors: [...this.state.colors,newColor],
            newName: ''
        })
    }
    handleSavePalette = () => {
        let namePalette = 'new test palette';
        const newPalette = {
            paletteName: namePalette,
            id:  namePalette.toLowerCase().replace(/ /g, '_'),
            colors: this.state.colors,
        }
        this.props.savePalette(newPalette);
        this.props.history.push('/react-colors-project')
    }

    render() {
        const {opened, defaultColor,colors, newName} = this.state;
        const {classes} = this.props;
        return (
            <div className={`${classes.PaletteForm} flex jc-end`}>
                <div className={`${classes.Side} ${opened === true ?'active': ''}`}>
                    <div className={`${classes.Top} flex ai-center jc-end`} onClick={this.toggleSidebar}>
                       <img src={GoBack} alt="go back"/>
                    </div>
                    <div className="color-picker-wrapper flex ai-center jc-center">
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
                <div className={`${classes.MainContent} ${opened === true ?'active': ''}`}>
                    <div className={`${classes.AppNav} flex jc-sb ai-center'`}>
                        <div className='left flex ai-center'>
                            <div className={`${classes.Create} flex ai-center`} onClick={this.toggleSidebar}>
                                <Icon className='svg'/>
                                <span>Create A palette</span>
                            </div>
                        </div>
                        <div className="right buttons flex ai-center">
                            <Button variant="contained" color="secondary">
                                Go back
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.handleSavePalette}>
                                Save Palette
                            </Button>
                        </div>
                    </div>
                    <div className={`${classes.content} flex ai-start flex-wrap`}>
                         {
                            colors.map(color => (
                                <DraggableColorBox color={color.color} name={color.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);
