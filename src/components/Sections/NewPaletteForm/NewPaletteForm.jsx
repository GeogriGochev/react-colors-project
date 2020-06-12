import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Icon} from '../../../assets/images/palette.svg';
import GoBack from '../../../assets/images/back.png';
import { ChromePicker } from 'react-color';
import styles from '../../../styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            opened: false,
            defaultColor: 'tomato',
            colors: []
        }
    }

    toggleSidebar = () => {
        this.setState({
            opened: !this.state.opened
        })
    }
    changeColor = (newColor) => {
        console.log(newColor.hex);
        
    }
    render() {
        const {opened, defaultColor} = this.state;
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
                            <div className="input"></div>
                            <div className="btn-wrapper">
                                <Button >
                                    Add Color
                                </Button>
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
                            <Button variant="contained" color="primary">
                                Save Palette
                            </Button>
                        </div>
                    </div>
                    <div className='content'>

                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);
