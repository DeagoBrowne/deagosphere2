import React from 'react'

export default function Intro(props) {


  return (
    <div className='intro-container'>
      <h1 className='introduction'>Choose a number...</h1>
      <p className='circle-selection' onClick={props.clickHandler} >6</p>
    </div>
  )
}