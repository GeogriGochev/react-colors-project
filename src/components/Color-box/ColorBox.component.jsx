import React, { Component } from 'react';
import {CopyToClipboard } from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import './colorbox.style.scss';
import { withStyles } from '@material-ui/styles';

const styles = {
    ColorBox: {
        height: '25%',
        display: 'flex',
        flex: '0 1 20%',
        maxWidth: '20%',
        position: 'relative',
        cursor: 'pointer',
        textTransform: 'uppercase',
        '&.black': {
            backgroundColor: 'black',
            height: '50%',
        },
        '&.big': {
            height: '50%',
        },
        '&:hover $copyButton': {
            opacity: '1',
        },
    },
    copyOverlay: {
        position:'absolute',
        opacity: '0',
        top: '0',
        left: '0',
        margin: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '-10',
        transform: 'scale(0) translateZ(0)',
        transition: 'transform 0.5s ease-in-out',
        '&.active': {
            zIndex: '10',
            opacity: '1',
            transform: 'scale(100) translateZ(0)',
        }
    },
    copyMsg: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',
        opacity: '0',
        zIndex: '-11',
        transform: 'scale(0.1)',
        '& p': {
            margin: '0',
            width: '100%',
            padding: '20px 0',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'white',
            fontWeight: '400',
            fontSize: '4rem',
            background: 'rgba(black, 0.2)',
            marginBottom: '30px',
        },
        '& span': {
            width: '100%',
            textAlign: 'center',
            color: 'white',
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: '100',
        },
        '&.active': {
            zIndex: '11',
            opacity: '1',
            transform: 'scale(1)',
            transition: '0.5s ease-in-out',
            transitionDelay: '0.1s',
        }
    },
    copyButton: {
        width: '100px',
        height: '40px',
        position: 'absolute',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        outline: 'none',
        background: 'transparent',
        fontSize: '20px',
        alignIitems: 'center',
        border: '1px solid rgba( 255, 255, 255, 0.3 )',
        textTransform: 'uppercase',
        padding: '5px 0',
        borderRadius: '5px',
        color: 'white',
        opacity: '0',
        transition: '0.25s ease-in-out',
        '&.back': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            color: 'white'
        },
    },
    copyContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    boxContent: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',  
        width: '100%' ,
        color: 'black',
        letterSpacing: '1px',
        fontSize: '0.75rem',
    },
    name: {
        padding: '7px',
    },
    seeMore: {
        background: 'rgba( 255, 255, 255, 0.3 )',
        color: 'white',
        padding: '7px',
    }
}

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
