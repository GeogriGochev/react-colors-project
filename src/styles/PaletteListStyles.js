export default {
    root: {
        position: 'relative'
    },
    background: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1'
    },
    heading: {
        position: 'relative',
        background: 'white',
        zIndex: '1',
        padding: '10px 30px',
        borderBottom: '1px solid #f4f4f4',
        boxShadow: '-5px 5px 20px rgba(8,42,62,.05)',
        margin: '0 0 30px',
        '& h1': {
            margin: '0',
            color: 'black'
        },
        '& a': {
            color: 'black',
            fontSize: '16px' 
        }
    },
    main: {
        position: 'relative',
        zIndex: '1',
        padding: '0 30px 30px',
    }
    
}