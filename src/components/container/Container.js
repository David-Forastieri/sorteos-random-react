import React, {useState} from 'react'
import InputInitial from '../input/InputInitial'
import './Container-style.css'

const Container = () => {

  const [inputName, setInputName] = useState('');
  const [nameArray, setNameArray] =useState([]);
  const [randomName, setRandomName] =useState([]);
  
  const HandleChange = (e) => setInputName(e.target.value)

  const CaptureName = (e) =>{
    setInputName('');
    setNameArray(currentName => [...currentName, inputName]);
  }

  const RandomName = () =>{
    let numberRandom = Math.random() *( nameArray.length - 1);
    console.log(nameArray)
    console.log(nameArray.length)
    let xName = nameArray[Math.round(numberRandom)]
    setRandomName(currentName => [...currentName, xName])

    let namesOut = nameArray.filter(names => names !== xName)
    setNameArray(namesOut)
  }

  const NameDelete = (index) =>{
    let deleteName = nameArray[index]
    let saveNames = nameArray.filter(name => name !== deleteName)
    setNameArray(saveNames)
  }

  return (
    <div className='container'>
      <div className='block-1'>
        <InputInitial handleChange={HandleChange} captureName={CaptureName} inputName={inputName} />
        {nameArray.length > 0 && (
          <div className='bloque-de-nombres'>
            <ul>
              {nameArray.map((name, index) =>
                <li key={index} className='algo'>
                  {name}
                  <div>
                  <button onClick={()=>NameDelete(index)}>x</button>
                  </div>
                </li>)}
            </ul>
          </div>
          )
        }
      </div>
      <div className='block-2'>
        {nameArray.length > 0 && (
          <button onClick={RandomName} >sortear</button>
        )}
        <div className='bloque-de-nombres'>
          <ul>
            {randomName.map((name, index) =>
              <li key={index}>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Container