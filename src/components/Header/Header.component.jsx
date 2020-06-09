import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Logo} from '../../assets/images/color-picker.svg';
import 'rc-slider/assets/index.css';

const styles = {
    Header: {
        height: '75px',
        padding:'0 30px',
    },
    Logo: {
        marginRight: '30px',
        '& $svg': {
            maxWidth: '40px'
        }
    },
    Info: {
        marginRight: '20px',
    },
    slider: {
        width: '340px',
        margin: '0 10px',
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle': {
            '& ,&:active, &:hover, &:focus': {
                width: '13px',
                height: '13px',
                position: 'relative',
                top: '2px',
                backgroundColor: 'green',
                outline: 'none',
                boxShadow: 'none',
                border: '2px solid green'
            }
        },
        '& .rc-slider-rail': {
            height: '8px'
        }
    }
    
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            format: 'hex',
            open: false
        }
    }

    closeSnakbar = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChangeColorType = e => {
        this.setState({
            format: e.target.value,
            open: !this.state.open
        });
        /** we go up, so that we can change da state of the color format from here */
        this.props.handleChangeColorType(e.target.value);
    }

    render() {
        const {format, open} = this.state;
        const {level, changeLevel, showSlider, classes} = this.props;
        return (
            <header className={`${classes.Header} flex ai-center jc-sb`}>
                <div className='left flex ai-center'>
                    <NavLink to='/react-colors-project' className={classes.Logo}>
                        <Logo className={classes.svg}/>
                    </NavLink>
                    {showSlider && (
                        <div className='slider-wrapper flex ai-center'>
                            <p className={classes.Info}>Level: {level}</p>
                            <div className={classes.slider}>
                                <Slider
                                    defaultValue={level}
                                    min={100}
                                    step={100}
                                    max={900}
                                    onAfterChange={changeLevel}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='right'>
                    <div className='select-container'>
                        <Select value={format} onChange={this.handleChangeColorType}>
                            <MenuItem value="hex">HEX - #fff</MenuItem>
                            <MenuItem value="rgb">RGB - rgb(255, 255, 255))</MenuItem>
                            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1))</MenuItem>
                        </Select>
                    </div>
                </div>
                <Snackbar 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id='message-id'> Format changed to "{format}" !</span>}
                    ContentProps={{
                        'aria-describedly': 'message-id'
                    }}
                    onClose={this.closeSnakbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnakbar} 
                            color='inherit'
                            key='close'
                            aria-label='close'
                            >
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Header);