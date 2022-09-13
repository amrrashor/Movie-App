import React from "react";
//react router
import { Link } from "react-router-dom";
//profile placeholder
import user from '../../images/user.png';
//style
import './Header.scss';

const Header = () => {
    return ( 
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-img">
                <img src={user} alt="Profile" />
            </div>
        </div>
    );
}

export default Header;