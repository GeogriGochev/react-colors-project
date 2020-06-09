import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ReactComponent as Icon} from '../assets/images/palette.svg';


export default class NewPaletteForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            opened: true
        }
    }
    render() {
        return (
            <div className= 'palette-form'>
                <div className='side'>
                    
                </div>
                <div className='main-content'>
                    <div className='app-nav flex jc-sb ai-center'>
                        <div className="left">
                            <div className='create flex ai-center'>
                                <Icon className='svg'/>
                                <span>Create A palette</span>
                            </div>
                        </div>
                        <div className="right buttons flex ai-center">
                        <Button variant="contained" color="secondary">
                            Secondary
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
