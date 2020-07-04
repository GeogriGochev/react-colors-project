export default {
    Palette: {
        height: '100vh',
        overflow:'hidden',
    },
    PaletteColors: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: ' wrap',
        height: 'calc(100% - 150px)',
        '@media (max-width: 767px)': {
            height: 'calc(100% - 107px)',
        },
    },
    ColorBox: {
        height: '25%',
        display: 'flex',
        flex: '0 1 20%',
        maxWidth: '20%',
        position: 'relative',
        cursor: 'pointer',
        textTransform: 'uppercase',
        '&.black': {
            backgroundColor: 'black',
            height: '50%',
            '@media (max-width: 768px)': {
                height: '25%',
            },
            '@media (max-width: 767px)': {
                height: '11%',
            },
        },
        '&.big': {
            height: '50%',
            '@media (max-width: 768px)': {
                height: '25%',
            },
            '@media (max-width: 767px)': {
                height: '10%',
            },
        },
        '&:hover $copyButton': {
            opacity: '1',
        },
        '&.black a': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            color: 'white'
        },
        '@media (max-width: 768px)': {
            flex: '0 1 33.33%',
            maxWidth: '33.33%',
            height: '14.3%',
        },
        '@media (max-width: 767px)': {
            flex: '0 1 100%',
            maxWidth: '100%',
            height: '5%',
            alignIitems:'center'
        }
    },
    copyOverlay: {
        position:'absolute',
        opacity: '0',
        top: '0',
        left: '0',
        margin: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '-10',
        transform: 'scale(0) translateZ(0)',
        transition: 'transform 0.5s ease-in-out',
        '&.active': {
            zIndex: '10',
            opacity: '1',
            transform: 'scale(100) translateZ(0)',
        }
    },
    copyMsg: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',
        opacity: '0',
        zIndex: '-11',
        transform: 'scale(0.1)',
        '& p': {
            margin: '0',
            width: '100%',
            padding: '20px 0',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'white',
            fontWeight: '400',
            fontSize: '4rem',
            background: 'rgba(0, 0, 0, 0.2)',
            marginBottom: '30px',
        },
        '& span': {
            width: '100%',
            textAlign: 'center',
            color: 'white',
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: '100',
        },
        '&.active': {
            zIndex: '11',
            opacity: '1',
            transform: 'scale(1)',
            transition: '0.5s ease-in-out',
            transitionDelay: '0.1s',
        }
    },
    copyButton: {
        width: '100px',
        height: '40px',
        position: 'absolute',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        outline: 'none',
        background: 'transparent',
        fontSize: '20px',
        alignIitems: 'center',
        border: '1px solid rgba( 255, 255, 255, 0.3 )',
        textTransform: 'uppercase',
        padding: '5px 0',
        borderRadius: '5px',
        color: 'white',
        opacity: '0',
        transition: '0.25s ease-in-out',
        '&.back': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            color: 'white'
        },
        '@media (max-width: 767px)': {
            fontSize: '14px',
            height: '30px',
        },
    },
    copyContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        '@media (max-width: 767px)': {
            alignItems: 'center',
        }
    },
    boxContent: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',  
        width: '100%' ,
        color: 'black',
        letterSpacing: '1px',
        fontSize: '0.75rem',
    },
    name: {
        padding: '7px',
        '@media (max-width: 767px)': {
            padding: '0 4px',
        }
    },
    seeMore: {
        background: 'rgba( 255, 255, 255, 0.3 )',
        color: 'white',
        padding: '7px',
        '@media (max-width: 767px)': {
            height: '100%',
            padding: '0 4px',
            fontSize: '12px',
            marginRight: '10px'
        }
    }
}