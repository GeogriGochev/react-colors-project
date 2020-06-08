import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
    Footer: {
        height: '75px',
        padding: '0 30px'
    },
    PalatteInfo: {
        '& span': {
            display: 'inline-block',
            fontWeight: 'bold',
            '&.emoji': {
                marginLeft: '10px'
            }
        }
    }
}

class Footer extends Component {
    render() {
        const {paletteName, emoji, classes} = this.props;
        return (
            <footer className={`${classes.Footer} flex ai-center jc-end`}>
                <p className={`${classes.PalatteInfo}  flex ai-center`}>
                    <span className='name'>{paletteName}</span>
                    <span className='emoji'>{emoji}</span>
                </p>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer);