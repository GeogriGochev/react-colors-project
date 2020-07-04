import React, { Component } from 'react'
import MiniPalette from '../../MiniPalette/MiniPalette';
import {Link} from 'react-router-dom';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import background from '../../../assets/images/back-2.jpg';
import styles from '../../../styles/PaletteListStyles';
import {ReactComponent as Logo } from '../../../assets/images/main-logo.svg';


class PaletteList extends Component {

    goToPalette(id) {
        this.props.history.push(`/react-colors-project/palette/${id}`)
    }

    render() {
        const {palettes, classes, deletePalette} = this.props;
        const miniPalettes = palettes.map( (palette) => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette 
                    {...palette}
                    goToPalette={() => this.goToPalette(palette.id)}
                    deletePalette={deletePalette}
                    key={palette.id}
                    id={palette.id}
                />
            </CSSTransition>
        ) )
        return (
            <div className={classes.root}>
                    <img className={classes.background} src={background} alt="background"/>
                    <div className={`${classes.heading}`}>
                        <div className="container flex ai-center jc-sb">
                            <h1 className={`${classes.label} flex ai-center`}><Logo className={classes.logo}/>React Colors</h1>
                            <Link className={classes.link} to='/react-colors-project/palette/new'>Create palette</Link>
                        </div>
                    </div>
                    <div className={` ${classes.main}`}>
                        <div className="container">
                            <TransitionGroup className='listing  flex ai-center flex-wrap'>
                                {miniPalettes}
                            </TransitionGroup>
                        </div>
                    </div>               
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
