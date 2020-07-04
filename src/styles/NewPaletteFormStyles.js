export default {
    PaletteForm: {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        '&.active': {
            overflow: 'hidden'
        },
        '@media (max-width: 767px)': {
            overflow: 'visible',
        },
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
        },
        '@media (max-width: 767px)': {
            padding: '15px 5%',
            height: 'auto',
            flexWrap: 'wrap'
        },
    },
    Create: {
        cursor: 'pointer',
        '& svg': {
          maxWidth: '50px',
          height: 'auto',
          marginRight: '10px'
        },
        '@media (max-width: 767px)': {
            marginBottom: '20px'
        },
    },
    Right: {
        '& button': {
            '& + button': {
                marginLeft: '20px'
            }
        },
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
        },     
        '@media (max-width: 767px)': {
            width: '100vw',
            '& .wrapper': {
                padding: '0 15px',
                width: '100%'
            }
        },   
    },
    colorPickerWrapper: {
        '& .buttons-wrapper': {
            '& button': {
                '& + button': {
                    marginLeft: '20px'
                }
            },
            '@media (max-width: 767px)': {
                flexDirection: 'column',
                '& button': {
                    width: '100%',
                    '& + button': {
                        marginLeft: '0 !important',
                        marginTop: '20px'
                    }
                },
            }
        },
        '& .chrome-picker': {
            width: '100% !important',
        },
        '& .MuiFormControl-root': {
            width: '100% !important',
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
        },
        '@media (max-width: 767px)': {
            transform: 'translateX(0)',
            '&.active': {
                width: '100%',
                transform: 'translateX(100%)'
            }
        },  
    },
    content: {
        height: 'calc(100vh - 115px)',
        padding: '20px',
        '@media (max-width: 767px)': {
            height: 'auto',
        },
    },
    '@global': {
        '.save-palette-form': {
            zIndex: '-100',
            opacity: '0',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '40%',
            borderRadius: '15px',
            overflow: 'hidden',
            backgroundColor: 'white',
            padding: '30px',
            transition: '0.2s ease-in-out',
            border: '1px solid black',
            '&.active': {
              zIndex: '101',
              opacity: '1',
            },      
            '& .close-icon': {
              position: 'absolute',
              cursor: 'pointer',
              top: '20px',
              right: '20px',
              width: '30px',
              height: '30px',
            },      
            '& form': {
              height: '100%'
            },
            '& .title': {
              marginBottom: '40px'
            },
            '& p': {
              marginBottom: '30px'
            },
            '& .buttons-wrapper': {
              alignSelf: 'flex-end',
              '& button': {
                '& + button': {
                  marginLeft: '20px'
                }
              }
            },
            '@media (max-width:767px)': {
                maxWidth: 'calc(100% - 5%)',
                width: '75%',
                height: '60%',      
                '& .MuiFormControl-root': {
                    width: '100%'
                },        
                '& .close-icon':  {
                    top: '15px',
                    right: '15px',
                    width: '25px',
                    height: '25px',
                }
            }
        }
    }   
}