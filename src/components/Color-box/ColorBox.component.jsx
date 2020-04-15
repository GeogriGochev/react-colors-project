import React, { Component } from 'react';
import {CopyToClipboard } from 'react-copy-to-clipboard';
import './colorbox.style.scss';

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
        const {background,name} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'active'}`} style={{background}}>
                    </div>
                    <div className={`copy-msg ${copied && 'active'}`}>
                        <p>Copied</p>
                        <span>{background}</span>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className='name'>{name}</span>
                            <span className='see-more'>More</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        ) 
    }
}

export default ColorBox;
