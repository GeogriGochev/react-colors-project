import React, { Component } from 'react'
import MiniPalette from '../../MiniPalette/MiniPalette';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../../../styles/PaletteListStyles';


class PaletteList extends Component {

    goToPalette(id) {
        this.props.history.push(`/react-colors-project/palette/${id}`)
    }

    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={`flex ai-center jc-sb ${classes.heading}`}>
                    <h1 className={classes.label}>React Colors</h1>
                    <Link className={classes.link} to='/react-colors-project/palette/new'>Create palette</Link>
                </div>
                <div className={`flex ai-center jc-sb flex-wrap ${classes.main}`}>
                    {
                        palettes.map( (palette) => (
                            <MiniPalette {...palette} goToPalette={() => this.goToPalette(palette.id)}/>
                        ) )
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
