import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar'
import CardNavigation from './components/CardNavigation/CardNavigation'
import FlashCard from './components/FlashCard/FlashCard';
import Button from './components/Button/Button';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Topbar/>
      <div className='container'> 
        <CardNavigation/>
        <div className="card-container">
        <FlashCard/>
        <div className="card-controls">
        <Button text ="Back"/>
        <Button text ="Flip"/>
        <Button text ="Next"/>
        </div>
        </div>    
        </div>
    </React.Fragment>

          

  );
}

export default App;
