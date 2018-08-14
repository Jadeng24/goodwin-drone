import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GDlogo from '../../Assets/gdLogo.png';
class Nav extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='Nav'>
                <div className="navBtns flexCenter">
                    <Link to="/" className="LogoLink"> <div className="navButton flexCenter">
                        <img src={GDlogo} alt="logo" className='gdLogo' />
                    </div></Link>

                    
                    <Link to="/drone"><div className="navButton flexCenter">
                        <h1>Drone</h1>
                        <FontAwesomeIcon
                            className="navIcon"
                            icon="helicopter"
                            size="sm"
                        />
                    </div></Link>
                </div>
            </div>
        )
    }
}
export default Nav;