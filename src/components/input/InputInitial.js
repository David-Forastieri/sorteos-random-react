import React from 'react'
import './Input-style.css'

const InputInitial = ({inputName, handleChange, captureName}) => {
  return (
    <>
      <input placeholder='Nombre' value={inputName} onChange={handleChange} ></input>
      <button className='input-button' onClick={captureName}>Ingresar</button>
    </>
  )
}

export default InputInitial
