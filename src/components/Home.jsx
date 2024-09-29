import React from 'react';
import { Link } from 'react-router-dom';
import enjeralogo from '../assets/images/logo.png';
import '../App.css';

const Home = () => {
    return (
        <>
            <div>
                <img src={enjeralogo} className="logo" alt="Habesha logo" />
            </div>
            <div className="text-overlay">
                <h2 className="title">Habesha Runner Game</h2>
            </div>
            <div className="card play">
                <Link to="/page1">
                    <button className="play">Play</button>
                </Link>
            </div>
        </>
    );
};

export default Home;
