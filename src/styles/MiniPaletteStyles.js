
export default {
    minipalette: {
        flex: '0 1 30%',
        maxWidth: '30%',
        background: 'White',
        borderRadius: '10px',
        padding: '10px',
        position: 'relative',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
        marginBottom: '30px',
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
        }
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
    }

}