import React, { Component } from 'react';
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../Nav/Nav.js';
class Home extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='Home'>
                <Nav/>
            </div>
        )
    }
}
export default Home;
