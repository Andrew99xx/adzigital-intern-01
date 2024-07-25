import React from 'react';
import Navbar from './components/Navbar';
import MiddleContainer from './components/MiddleContainer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <MiddleContainer />
        </div>
    );
};

export default App;
