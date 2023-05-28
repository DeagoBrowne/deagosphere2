import './App.css';
import React, { useState } from 'react';
import Intro from './Intro';
import Circle from './Circle';

function App() {

  const [circles, setCircles] = useState(0);

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
      <div>
        <Circle numCircles={circles} />
      </div>
    )
  }
}

export default App;
