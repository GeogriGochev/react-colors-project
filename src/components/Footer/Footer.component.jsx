import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const {paletteName, emoji} = this.props;
        return (
            <footer className='flex ai-center jc-end'>
                <p className='palatte-info flex ai-center'>
                    <span className='name'>{paletteName}</span>
                    <span className='emoji'>{emoji}</span>
                </p>
            </footer>
        )
    }
}

export default Footer;