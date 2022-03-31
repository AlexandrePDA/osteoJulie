import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <p>Julie Pires </p>
            </div>
            <NavLink to="/contact" className="nav">
            <li>Contactez-moi</li>
          </NavLink>
        </div>
    );
};

export default Header;