import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <Services />
      </div>
    </div>
  );
};

export default App;
