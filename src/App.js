import './App.css';
import React, { useState } from 'react';
import Intro from './Intro';
import Circle from './Circle';

function App() {

  const [circles, setCircles] = useState(0);

  const sphereSelection = (event) => {
    setCircles(event.target.innerHTML);
    console.log(circles)
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
        <Circle />
      </div>
    )
  }
}

export default App;
