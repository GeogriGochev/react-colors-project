import React, { Component } from 'react'
import './colorbox.style.scss';

export default class ColorBox extends Component {
    render() {
        const {background,name} = this.props;
        return (
            <div style={{background}} className="ColorBox">
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className='name'>{name}</span>
                        <span className='see-more'>More</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
            </div>
        ) 
    }
}
