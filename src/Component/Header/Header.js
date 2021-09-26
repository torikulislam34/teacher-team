import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='bg-dark text-white text-center headerStyle'>
            <h1>The best teacher <span className='text-warning'>organization</span></h1>
            <p>The best teacher organization in my city.</p>
            <h1><span className='text-warning'>Total Budget :</span> 80 Milion</h1>
        </nav>
    );
};

export default Header;