
import React from 'react';

function PaletteFooter(props) {
    const {paletteName,emoji} = props;
    return (
        <footer className='flex ai-center jc-end'>
            <p className='palatte-info flex ai-center'>
                <span className='name'>{paletteName}</span>
                <span className='emoji'>{emoji}</span>
            </p>
        </footer>
    )
}

export default PaletteFooter;

