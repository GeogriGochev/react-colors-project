import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import DraggableColorList from '../../DraggableColorList/DraggableColorList.component';
import arrayMove from 'array-move';
import styles from '../../../styles/NewPaletteFormStyles';
import PaletteFormNav from '../../PaletteFormNav/PaletteFormNav.component';
import PaletteFormSide from '../../PaletteFormSide/PaletteFormSide.component';
import PopPaletteFrom from '../../PopPaletteForm/PopPaletteFrom.component';

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
            maxColors: 20,
            colors: [...this.props.palettes[0].colors]
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
        if(this.state.colors.length < this.state.maxColors) {
            this.setState({
                colors: [...this.state.colors,newColor],
                newName: ''
            })
        }
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
    clearPalette = () => {
        this.setState({colors: []})
    }
    addRandomColor = () => {
        const allColors = this.props.palettes.map(p => p.colors).flat();
        const ranNum = Math.floor(Math.random() * allColors.length);
        const ranColor = allColors[ranNum];
        if(this.state.colors.length < this.state.maxColors) {
            this.setState({colors: [...this.state.colors,ranColor]})
        }
    }

    render() {
        const {opened, defaultColor,colors, newName,overlayOpen,popPaletteFormOpen, newPaletteName,maxColors} = this.state;
        const {classes} = this.props;       
        const maxColorsReached = colors.length >= maxColors ;
        return (
            <div className={`${classes.PaletteForm} ${overlayOpen === true ? 'active' : ''} flex jc-end`}>
                <div className={`overlay ${overlayOpen === true ? 'active' : ''}`} onClick={this.popPaletteForm}></div>
                <div className={`${classes.Side} ${opened === true ? 'active' : ''}`}>
                    <PaletteFormSide
                        toggleSidebar = {this.toggleSidebar}
                        clearPalette = {this.clearPalette}
                        changeColor = {this.changeColor}
                        addColor = {this.addColor}
                        addRandomColor = {this.addRandomColor}
                        handleChange = {this.handleChange}
                        maxColorsReached = {maxColorsReached}
                        defaultColor = {defaultColor}
                        newName = {newName}
                    />
                </div>
                <div className={`${classes.MainContent} ${opened === true ? 'active' : ''}`}>
                    <PaletteFormNav 
                        toggleSidebar={this.toggleSidebar}
                        GoBack={this.GoBack}
                        popPaletteForm={this.popPaletteForm}
                    />
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
                <PopPaletteFrom
                    popPaletteFormOpen = {popPaletteFormOpen}
                    popPaletteForm = {this.popPaletteForm}
                    handleSavePalette = {this.handleSavePalette}
                    newPaletteName = {newPaletteName}
                    handlePaletteNameChange = {this.handlePaletteNameChange}
                    defaultColor={defaultColor}
                />
            </div>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);
