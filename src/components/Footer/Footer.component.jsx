import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/FooterStyles';
import {ReactComponent as Logo} from '../../assets/images/variation.svg';


class Footer extends Component {
    render() {
        const {paletteName, classes} = this.props;
        return (
            <footer className={`${classes.Footer} flex ai-center`}>
                <div className="container flex ai-center jc-end">
                    <p className={`${classes.PalatteInfo}  flex ai-center`}>
                        <span className='name'>{paletteName}</span>
                        <span className='emoji'><Logo/></span>
                    </p>
                </div>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer);