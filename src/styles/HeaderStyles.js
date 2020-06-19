export default {
    Header: {
        height: '75px',
        padding:'0 30px',
    },
    left: {
        maxHeight: '75px'
    },
    Logo: {
        marginRight: '30px',
        '& $svg': {
            maxWidth: '40px',
            maxHeight: '40px'
        }
    },
    Info: {
        marginRight: '20px',
    },
    slider: {
        width: '340px',
        margin: '0 10px',
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        '& .rc-slider-handle': {
            '& ,&:active, &:hover, &:focus': {
                width: '13px',
                height: '13px',
                position: 'relative',
                top: '2px',
                backgroundColor: 'green',
                outline: 'none',
                boxShadow: 'none',
                border: '2px solid green'
            }
        },
        '& .rc-slider-rail': {
            height: '8px'
        }
    }
    
}