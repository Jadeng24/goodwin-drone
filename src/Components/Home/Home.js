import React, { Component } from 'react';
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import droneBody from '../../Assets/droneBody.png';
import propLeft from '../../Assets/propellerLeft.png';
import propRight from '../../Assets/propellerRight.png';
class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='Home'>
                <Nav />

                <div className="HomeContent">

                    <div className='videoHolder'>
                        <div className="whiteTriangle">
                        </div>
                    </div>
                    {/* <div className="whiteDiv">
                    </div> */}
                    <div className="droneHolder">
                        <div className='drone'>
                            <img className="droneBody" src={droneBody} alt="propeller" />
                            <img className="droneProp topLeft" src={propLeft} alt="propeller" />
                            <img className="droneProp topRight" src={propRight} alt="propeller" />
                            <img className="droneProp bottomLeft" src={propLeft} alt="propeller" />
                            <img className="droneProp bottomRight" src={propRight} alt="propeller" />
                        </div>

                    </div>





                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;
