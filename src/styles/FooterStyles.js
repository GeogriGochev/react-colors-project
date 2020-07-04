export default {
    Footer: {
        height: '75px',
        padding: '0 30px',
        '& .container': {
            maxHeight: '75px',
        },
        '@media (max-width: 1024px)': {
            padding: '0',
        },
        '@media (max-width:767px)': {
            height: '50px',
        }
    },
    PalatteInfo: {
        margin:'0',
        '& span': {
            display: 'inline-block',
            maxHeight: '75px',
            fontWeight: 'bold',
            '&.emoji': {
                marginLeft: '10px',
                '& svg': {
                    maxWidth: '25px',
                    maxHeight: '25px'
                }
            }
        }
    }
}