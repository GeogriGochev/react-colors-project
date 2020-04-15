import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/color-picker.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Header extends Component {
    render() {
        const {level, changeLevel} = this.props;
        return (
            <header className='flex ai-center jc-sb'>
                <div className='left flex ai-center'>
                    <NavLink to='/react-colors-project' className='logo'>
                        <Logo className='svg'/>
                    </NavLink>
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
                </div>
                <div className='right'>
                    hex
                </div>
            </header>
        )
    }
}

export default Header;