import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/FooterStyles';


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