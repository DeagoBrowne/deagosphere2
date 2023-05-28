import './App.css';
import React, { useState } from 'react';
import Intro from './Intro';
import Circle from './Circle';
import Reload from './Reload';

function App() {

  const [circles, setCircles] = useState(0);
  // const [reset, setReset] = useState(false);

  const sphereSelection = (event) => {
    setCircles(event.target.innerHTML);
  }

  if (circles === 0) {
    return (
      <div>
        <Intro clickHandler={sphereSelection} />
      </div>
    );
  } else {
    return (
      <div className='sphere-container'>
        <Circle numCircles={circles} />
        <Reload />
      </div>
    )
  }
}

export default App;
