export default {
    '@global': {
        'body': {
            fontFamily: "'Poppins', sans-serif",
        },
        'a' : {
            textDecoration: 'none'
        },
        'p': {
            margin: '0'
        },
        '.container': {
            width: '100%',
            maxWidth: 'calc(100% - 10%)',
            margin: 'auto',
            '@media (max-width:768px)': {
                maxWidth: 'calc(100% - 5%)',
            }
        },
        '.flex': {
            display: 'flex',
            '&.flex-inline': {
              display: 'inline-flex'
            },          
            '&.flex-row': {
              flexDirection: 'row'
            },          
            '&.flex-wrap': {
              flexWrap: 'wrap'
            },          
            '&.flex-column': {
              flexDirection: 'column'
            },          
            '&.jc-center': {
              justifyContent: 'center'
            },          
            '&.jc-sb': {
              justifyContent: 'space-between'
            },          
            '&.jc-sa': {
              justifyContent: 'space-around'
            },          
            '&.jc-end': {
              justifyContent: 'flex-end'
            },          
            '&.jc-start': {
              justifyContent: 'flex-start'
            },          
            '&.ai-center': {
              alignItems: 'center'
            },          
            '&.ai-start': {
              alignItems: 'flex-start'
            },          
            '&.ai-end': {
              alignItems: 'flex-end'
            }
        },        
        '.fade-enter': {
            opacity: '0',
            transform:' scale(0.9)'
        },
        '.fade-enter-active': {
            opacity: '1',
            transform: 'translateX(0)',
            transition:' opacity 300ms, transform 300ms'
        },
        '.fade-exit': {
            opacity: '1'
        },
        '.fade-exit-active': {
            opacity: '0',
            transform: 'scale(0.9)',
            transition: 'opacity 300ms, transform 300ms',
        },
        '.overlay': {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '-100',
            backgroundColor: 'rgba(0,0,0,0.6)',
            opacity: '0',
            transition: '0.2s ease-in-out',
            '&.active': {
              opacity: '1',
              zIndex: '100'
            }
        },
        '.MuiPaper-root': {
            top: '66px !important'
        },
        '.single-paletteFooter': {
            padding: '0 30px',
            height: '75px',
            '@media (max-width:767px)': {
                height: '50px',
                marginTop: '6px',
                padding: '0'
            }
        },
        '.MuiSelect-select.MuiSelect-select': {
            '@media (max-width:768px)': {
                fontSize: '14px'
            }
        }        
    }
}