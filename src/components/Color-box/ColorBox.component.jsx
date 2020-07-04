import React, { Component } from 'react';
import {CopyToClipboard } from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            copied: false
        };
    }

    changeCopyState = () => {
        this.setState({
            copied: true
        }, () => {
            setTimeout(()=> this.setState({ copied: !this.state.copied}),1500)
        })
    }

    render() {
        const {background,name,moreUrl, showLink,classes, big} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}} className={`${classes.ColorBox} ${big && 'big'}`}>
                    <div className={`${classes.copyOverlay} ${copied && 'active'}`} style={{background}}>
                    </div>
                    <div className={`${classes.copyMsg} ${copied && 'active'}`}>
                        <p>Copied</p>
                        <span>{background}</span>
                    </div>
                    <div className={classes.copyContainer}>
                        <div className={classes.boxContent}>
                            <span className={classes.name}>{name}</span>
                            {
                                showLink && (
                                    <Link to={moreUrl} onClick={ e => e.stopPropagation() }><span className={classes.seeMore}>More</span></Link>
                                )
                            }
                            
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        ) 
    }
}

export default withStyles(styles)(ColorBox);
