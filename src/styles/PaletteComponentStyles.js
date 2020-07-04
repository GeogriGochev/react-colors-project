export default {
    Palette: {
        height: '100vh',
        overflow: 'hidden'
    },
    PaletteColors: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: ' wrap',
        height: 'calc(100% - 150px)',
        '@media (max-width:767px)': {
            height: 'calc(100% - 100px)',
        }
    }
}