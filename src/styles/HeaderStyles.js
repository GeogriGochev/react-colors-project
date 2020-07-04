export default {
    Header: {
        height: '75px',
        padding:'0 30px',
        '@media (max-width: 1024px)': {
            padding:'0',
        },
        '@media (max-width:767px)': {
            height: '50px',
        }
    },
    left: {
        maxHeight: '75px'
    },
    Logo: {
        marginRight: '30px',
        '& $svg': {
            maxWidth: '40px',
            maxHeight: '40px',
            '@media (max-width:767px)': {
                maxWidth: '30px',
                maxHeight: '30px',
            }
        },
        '@media (max-width:767px)': {
            marginRight: '15px',
        }
    },
    Info: {
        margin: '0',
        marginRight: '20px',
        '@media (max-width:767px)': {
            marginRight: '5px',
            fontSize: '14px'
        }
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
        },
        '@media (max-width:767px)': {
            width: '80px',
        }
    }
    
}