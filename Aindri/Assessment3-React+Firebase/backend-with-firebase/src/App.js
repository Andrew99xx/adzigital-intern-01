import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MiddleContainer from './components/MiddleContainer';
import { ScrollProvider } from './components/ScrollContext';
import './App.css';

const App = () => {
  const [activeBlock, setActiveBlock] = useState(null);

  return (
    <ScrollProvider>
      <div className="App">
        <Navbar onToggle={setActiveBlock} />
        <MiddleContainer activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
      </div>
    </ScrollProvider>
  );
};

export default App;
