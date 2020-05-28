import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {ReactComponent as Logo} from '../../assets/images/color-picker.svg';

import 'rc-slider/assets/index.css';

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
        const {level, changeLevel, showSlider} = this.props;
        return (
            <header className='flex ai-center jc-sb'>
                <div className='left flex ai-center'>
                    <NavLink to='/react-colors-project' className='logo'>
                        <Logo className='svg'/>
                    </NavLink>
                    {showSlider && (
                        <div className='slider-wrapper flex ai-center'>
                            <p className='info'>Level: {level}</p>
                            <div className='slider'>
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

export default Header;