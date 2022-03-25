import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
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