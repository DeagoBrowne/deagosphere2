import React from 'react'

export default function Intro(props) {


  return (
    <div className='intro-container'>
      <h1 className='introduction'>Choose a number...</h1>
      <div className='selection-list'>
        <p className='circle-selection' onClick={props.clickHandler} >3</p>
        <p className='circle-selection' onClick={props.clickHandler} >6</p>
        <p className='circle-selection' onClick={props.clickHandler} >9</p>
      </div>
    </div>
  )
}