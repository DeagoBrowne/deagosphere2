import React from "react";

export default function Theme(props) {
  return (
    <div>
      <h3 className="theme-text" onClick={props.clickHandler} >{props.theme === 'light' ? 'Dark' : 'Light'}</h3>
    </div>
  )
}