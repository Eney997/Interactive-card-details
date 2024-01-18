import React from 'react'
import './Greycard.css'
import { useState } from 'react'
import Coloredbackground from '../forBack/Coloredbackground'


const Greycard = (props) => {
   
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue.slice(0, 3);
      setValue(inputValue);
    };

  return (
    <Coloredbackground>
   <div className='greyCardClass'>{props.children}
        <div className='blackDivsquear'></div>
        <input type="number" value={value} onChange={handleInputChange} placeholder="000" className='numInputBox'/>
   </div>
   </Coloredbackground>
  )
}

export default Greycard