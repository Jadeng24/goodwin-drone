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

    componentDidMount() {
        document.addEventListener('scroll', () => {
            // Offset all anchors by -50 to account for a fixed header 
            // and scroll more quickly than the default 400ms 
            // configureAnchors({ offset: -50, scrollDuration: 500 })

            const isTop = window.scrollY < 20;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <div className={this.state.isTop ? 'topOfPageNav Nav' : 'notTopOfPageNav Nav'}>
                <div className={this.state.isTop ? 'leftNavTop leftNav' : 'leftNav'}></div>
                <div className={this.state.isTop ? 'topOfPageNavBtns navBtns' : 'notTopOfPageNavBtns navBtns'}>
                    <Link to="/" className="LogoLink"> <div className="navButton flexCenter">
                        <img src={GDlogo} alt="logo" className='gdLogo' />
                    </div></Link>

                    

                    <Link to="/"><div className="navButton flexCenter">
                        <h1>HOME</h1>
                    </div></Link>
                    <Link to="/videos"><div className="navButton flexCenter">
                        <h1>VIDEOS</h1>
                    </div></Link>
                    <Link to="/pricing"><div className="navButton flexCenter">
                        <h1>PRICING</h1>
                    </div></Link>
                    <Link to="/about"><div className="navButton flexCenter">
                        <h1>ABOUT</h1>
                    </div></Link>
                    <Link to="/contact"><div className="navButton flexCenter">
                        <h1>CONTACT</h1>
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