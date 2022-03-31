import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Presentation/>
            <About/>
            {/* API GOOGLE MAPS */}
            <Footer />
        </div>
    );
};

export default Home;