import React from 'react';
import SquelettePic from '../assets/squelette.webp';
import MassagePic from '../assets/massage.jpeg';
import AnatomiePic from '../assets/anatomie.webp'

const Presentation = () => {
    return (
        <div className="Parent">
            <div className="div1">
                <h1> Ostéopathe</h1>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, molestias.</h2>
            </div>
                <img className="div2" src={SquelettePic} alt="" />
                <img className="div3" src={MassagePic} alt="" />
                <img className="div4" src={AnatomiePic} alt="" /> 

        </div>
    );
};

export default Presentation;