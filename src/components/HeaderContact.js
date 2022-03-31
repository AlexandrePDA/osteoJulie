import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderContact = () => {
    return (
        <div>
            <div className="header">
            <div className="logo">
                <p>Julie Pires </p>
            </div>
            <NavLink to="/" className="nav">
            <li>Accueil</li>
          </NavLink>
        </div>
        </div>
    );
};

export default HeaderContact;