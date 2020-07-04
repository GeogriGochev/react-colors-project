
export default {
    boxMiniPalette: {
        flex: '0 1 calc(33.33% - 30px)',
        maxWidth: 'calc(33.33% - 30px)',
        padding: '0 15px',
        marginBottom: '30px',
        '@media (max-width: 1024px)': {
            flex: '0 1 calc(50% - 30px)',
            maxWidth: 'calc(50% - 30px)',
        },
        '@media (max-width: 767px)': {
            flex: '0 1 100%',
            maxWidth: '100%',
        }
    },
    minipalette: {
        background: 'White',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '10px',
        position: 'relative',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
        transition: '0.25s ease-in-out',
        cursor: 'pointer',
        '& a' : {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '1'
        },
        '&:hover': {
            transform: 'scale(0.98)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            '& .remove': {
                transform: ' translateX(0)',
                opacity: '1'
            }
        },
    },
    colors: {
        width: '100%'
    },
    singleColor: {
        flex: ' 0 1 20%',
        maxWidth: '20%',
        height: '40px',
        display: 'flex'
    },
    bottomPart: {
        width: '100%'
    },
    removeMiniPalette: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '40px',
        height: '40px',
        backgroundColor: 'red',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
        transform: ' translateX(10px)',
        opacity: '0',
        transition: '0.25s ease-in-out',

        '@media (max-width: 768px)': {
            transform: ' translateX(0)',
            opacity: '1',
        },
    },
}