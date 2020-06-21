export default {
    root: {
        height: '25%',
        flex: '0 1 20%',
        maxWidth: '20%',
        position: 'relative',
        cursor:'pointer',
        textTransform: 'uppercase',
        transition: '0.25s ease-in-out',
        '& .bottom': {
            width: '100%',
            '& .remove-color': {
                margin: '10px',
                transition: '0.25s ease-in-out',
                '& #Path_930': {
                    transition: '0.25s ease-in-out',
                },
                '&:hover': {
                    transform: 'scale(1.2)',
                }
            },
            '& .name': {
                margin: '10px',
                transition: '0.25s ease-in-out',
            },
        },
        '&:hover': {
            transform: 'scale(0.95)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            '& .bottom': {
                '& .name': {
                    color: 'white'
                }
            },
            '& .remove-color': {
                '& #Path_930': {
                    fill: 'white'
                }
            }           
        }
    }
}