import React from 'react';
import './App.css';
import Header from './conponents/Header';
import Navbar from './conponents/Navbar';
import Profile from './conponents/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
