import React, { Component } from 'react';
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='Home'>
                <div className="HomeContent">
                    <div className="fixedNav"><Nav /></div>
                    <div className='videoHolder'>
                        <div className="whiteTriangle">
                        </div>
                    </div>
                    <div className="whiteDiv">
                    </div>





                
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home;
