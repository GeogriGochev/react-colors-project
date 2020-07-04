
import React from 'react';

function PaletteFooter(props) {
    const {paletteName,emoji} = props;
    return (
        <footer className='single-paletteFooter flex ai-center'>
            <div className='container flex ai-center jc-end'>
                <p className='palatte-info flex ai-center'>
                    <span className='name'>{paletteName}</span>
                    <span className='emoji'>{emoji}</span>
                </p>
            </div>
        </footer>
    )
}

export default PaletteFooter;

