import React from "react";

export default function Circle({ numCircles }) {
  let numArr = [];
  for (let i = 1; i <= numCircles; i++) {
    numArr.push(i);
  }
  console.log(numArr)
  return (
    <>
      {numArr.map((item, index) => {
        return <div key={index} className={`circle${item}`}>
        </div>
      })}
    </>
  )
}