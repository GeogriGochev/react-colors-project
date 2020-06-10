import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import {ReactComponent as Icon} from '../../assets/images/palette.svg';
import GoBack from '../../assets/images/back.png';
import styles from '../../styles/NewPaletteFormStyles';


class NewPaletteForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            opened: false
        }
    }

    toggleSidebar = () => {
        this.setState({
            opened: !this.state.opened
        })
    }
    render() {
        const {opened} = this.state;
        return (
            <div className='palette-form'>
                <div className={`overlay ${opened === true ?'active': ''}`} onClick={this.toggleSidebar}></div>
                <div className={`side ${opened === true ?'active': ''}`}>
                    <div className="top flex ai-center jc-end" onClick={this.toggleSidebar}>
                       <img src={GoBack} alt="go back"/>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='app-nav flex jc-sb ai-center'>
                        <div className='left'>
                            <div className='create flex ai-center' onClick={this.toggleSidebar}>
                                <Icon className='svg'/>
                                <span>Create A palette</span>
                            </div>
                        </div>
                        <div className="right buttons flex ai-center">
                        <Button variant="contained" color="secondary">
                            Go back
                        </Button>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        </div>
                    </div>
                    <div className='content'>

                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NewPaletteForm);
