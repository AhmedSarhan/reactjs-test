import logo from './logo.svg';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './Components/Header/Header';
import Smoothies from './Components/Smoothies/Smoothies';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState(2);
  return (
    <div className="App">
      <Header cart={counterState} />
      <Smoothies addToCart={setCounterState} cart={counterState} />
    </div>
  );
}

export default App;
