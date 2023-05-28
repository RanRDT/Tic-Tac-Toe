import React from "react";
import { useState } from "react";

export const Button = () => {
const [Sign,setSign]=useState(true)
function handelClick() {
  if (Sign==`x`) {
    return setSign(`o`)
  } else {
    return setSign(`x`)

  }
}
return (
    <>
      <button 
      className="button"
      onClick={()=>{handelClick()}}>
     {Sign} 
      </button>
    </>
  );
};
