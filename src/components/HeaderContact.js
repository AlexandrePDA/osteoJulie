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
            <li><i class="fa-solid fa-house"></i><span>Accueil</span></li>
          </NavLink>
        </div>
        </div>
    );
};

export default HeaderContact;