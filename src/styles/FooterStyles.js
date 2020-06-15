export default {
    Footer: {
        height: '75px',
        padding: '0 30px',
        '& .container': {
            maxHeight: '75px',
        }
    },
    PalatteInfo: {
        '& span': {
            display: 'inline-block',
            maxHeight: '75px',
            fontWeight: 'bold',
            '&.emoji': {
                marginLeft: '10px',
                '& svg': {
                    maxWidth: '25px'
                }
            }
        }
    }
}