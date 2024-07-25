import React, { useState, useEffect } from 'react';
import '../components/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isJewelryBlockVisible, setJewelryBlockVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#jewelry-block') && !event.target.closest('#jewelry-link')) {
                setJewelryBlockVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleJewelryClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setJewelryBlockVisible(!isJewelryBlockVisible);
    };

    return (
        <div>
            <div className="navbar">
                <div className="nav-left">
                    <ul className="ul">
                        <a href="#" className="icons" id="location"></a>
                        <a href="#" id="jewelry-link" onClick={handleJewelryClick}>JEWELRY</a>
                        <a href="#">NEW RELEASES</a>
                        <a href="#">GIFTS</a>
                    </ul>
                </div>
                <div className="nav-logo">
                    <h1>APOLLONIAN</h1>
                </div>
                <div className="nav-right">
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button className="search-button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="nav-right-icons">
                        <a href="#" className="icons" id="heart-icon"></a>
                        <a href="#" className="icons" id="bag-icon"></a>
                        <a href="#" className="icons" id="person-icon"></a>
                    </div>
                </div>
            </div>
            {isJewelryBlockVisible && (
                <div id="jewelry-block" className="visible">
                    <p>This is the jewelry block content.</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
