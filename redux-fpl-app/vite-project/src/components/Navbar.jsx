import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
     return(
        <div>
            <div className="nav-container">
                <div className="left-container">
                    <Link className="nav-bar-link1" to="/">FPL BHAKTAPURIAN</Link>
                </div>
                <div className="middle-container">
                    <Link className="nav-bar-link2" to="/gameweeklive">GAMEWEEKS</Link>
                    <Link className="nav-bar-link2" to="/fixtures">FIXTURES</Link>
                    <Link className="nav-bar-link2" to="/stats">STATS</Link>
                    <Link className="nav-bar-link2" to="/manager">MANAGER</Link>
                    <Link className="nav-bar-link2" to="/league">LEAGUE</Link>                                        
                </div>
                <div className="right-container">
                    <Link className="nav-bar-link3" to="/">LOGIN</Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;