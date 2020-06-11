import React, { Component } from 'react'
import MiniPalette from '../../MiniPalette/MiniPalette';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import background from '../../../assets/images/back.jpg';
import styles from '../../../styles/PaletteListStyles';
import {ReactComponent as Logo } from '../../../assets/images/main-logo.svg';


class PaletteList extends Component {

    goToPalette(id) {
        this.props.history.push(`/react-colors-project/palette/${id}`)
    }

    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <img className={classes.background} src={background} alt="background"/>
                <div className={`flex ai-center jc-sb ${classes.heading}`}>
                    <h1 className={classes.label}><Logo className={classes.logo}/>React Colors</h1>
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
