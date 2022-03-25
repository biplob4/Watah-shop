import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <h3>BIPLOB</h3>
            <nav>
                <a href="/Home">Home <small></small></a>
                <a href="/Shope">Shope <small></small></a>
                <a href="/Card">Card <small></small></a>
                <a href="/Product">Product <small></small></a>
                <a href="Contuct">Contuct <small></small></a>
            </nav>
        </div>
    );
};

export default Header;