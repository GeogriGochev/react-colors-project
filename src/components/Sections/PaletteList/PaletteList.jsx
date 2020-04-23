import React, { Component } from 'react'
import MiniPalette from '../../MiniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: 'blue'
    }
}

class PaletteList extends Component {
    render() {
        const {palettes, classes} = this.props
        return (
            <div className={classes.root}>
                <h1>React Colors</h1>
                
                <div className='flex ai-center jc-sb flex-wrap'>
                    {
                        palettes.map( (palette) => (
                            <MiniPalette {...palette}/>
                        ) )
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
