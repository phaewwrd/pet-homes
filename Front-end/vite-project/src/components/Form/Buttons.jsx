import React from 'react'

function Buttons({isSubmitting, label}) {
  return (
    <button className="btn btn-accent w-[150px] shadow hover:cursor-pointer">
    {
      isSubmitting 
      ? <p>Loading...</p> 
      : <p>{label}</p>
    }
  </button>  )
}

export default Buttons