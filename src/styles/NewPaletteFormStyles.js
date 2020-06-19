export default {
    PaletteForm: {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        '&.active': {
            overflow: 'hidden'
        }
    },
    AppNav: {
        height: '75px',
        padding: '0 30px',
        borderBottom: '1px solid #f4f4f4',
        boxShadow: '-5px 5px 20px rgba(8,42,62,.09)',
        '& button': {
            '& + button': {
                marginLeft: '20px'
            }
        }
    },
    Create: {
        cursor: 'pointer',
        '& svg': {
          maxWidth: '50px',
          height: 'auto',
          marginRight: '10px'
        }
    },
    Right: {
        '& button': {
            '& + button': {
                marginLeft: '20px'
            }
        }
    },
    Side: {
        position: 'absolute',
        backgroundColor: 'white',
        top: '0',
        left: '0',
        width: '400px',
        height: '100%',
        zIndex: '11',
        transform: 'translateX(-100%)',
        opacity: '0',
        boxShadow: '-5px 5px 20px rgba(8,42,62,.09)',
        transition: '0.5s cubic-bezier(.07,.08,.16,.99)',
        '&.active': {
            opacity: '1',
            transform: 'translateX(0)'
        }        
    },
    colorPickerWrapper: {
        '& .buttons-wrapper': {
            '& button': {
                '& + button': {
                    marginLeft: '20px'
                }
            }
        }
    },
    ColorPicker: {
        margin: '30px 0'
    },
    inputWrapper: {
        '& button': {
            marginTop: '30px',
        }
    },
    Top: {
        height: '75px',
        borderBottom: '1px solid #f4f4f4',
        '& img': {
            maxWidth: '20px',
            marginRight: '20px',
            cursor: 'pointer',
        }
    },
    MainContent: {
        width: '100%',
        paddingLeft: '0',
        transition: '0.5s cubic-bezier(.07,.08,.16,.99)',
        '& .content': {
            padding: '20px',
        },
        '&.active': {
            width: 'calc(100% - 400px)'
        }
    },
    content: {
        height: 'calc(100vh - 76px)',
        padding: '20px'
    }
}