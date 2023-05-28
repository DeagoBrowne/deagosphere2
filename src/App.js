import './App.css';
import React, { useState } from 'react';
import Intro from './Intro';
import Circle from './Circle';
import Reload from './Reload';
import Theme from './Theme';

function App() {

  const [circles, setCircles] = useState(0);
  const [theme, setTheme] = useState('light')

  const sphereSelection = (event) => {
    setCircles(event.target.innerHTML);
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else setTheme('light');
  }

  if (circles === 0) {
    return (
      <div className='App light-mode'>
        <Intro clickHandler={sphereSelection} />
      </div>
    );
  } else {
    return (
      <div className={`sphere-container App ${theme}-mode`}>
        <Theme clickHandler={changeTheme} theme={theme} />
        <Circle numCircles={circles} />
        <Reload />
      </div>
    )
  }
}

export default App;
