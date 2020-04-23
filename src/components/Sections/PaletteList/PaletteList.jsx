import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props
        return (
            <div>
                <h1>React Colors</h1>
                <ul>
                    {
                        palettes.map( (palette) => (
                            <li><Link to={`/react-colors-project/palette/${palette.id}`}>{palette.paletteName}</Link></li>
                        ) )
                    }
                </ul>
            </div>
        )
    }
}