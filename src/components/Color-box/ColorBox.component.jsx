import React, { Component } from 'react'
import './colorbox.style.scss';

export default class ColorBox extends Component {
    render() {
        const {background,name} = this.props
        return (
            <div style={{backgroundColor: background}} className="ColorBox">
                <span>{name}</span>
            </div>
        ) 
    }
}
