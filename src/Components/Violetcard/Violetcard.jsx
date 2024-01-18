import React from 'react'
import Greycard from '../Greycard/Greycard'
import './Violetcard.css'
import { useState } from 'react'

const Violetcard = () => {
    const [valuee, setValuee] = useState('');

    const handleInputChangee = (e) => {
      let inputValuee = e.target.value;
      inputValuee = inputValuee.slice(0, 16);
      setValuee(inputValuee);
    };

  return (
    <Greycard>
        <div className='secondCard'>
            <div className='violetsCircle'></div>
            <input 
            id='input2'
            type="number" 
            value={valuee} 
            onChange={handleInputChangee} 
            placeholder="0000 0000 0000 0000" 
            className='numInputBox2'/>
            <input className='fottxtInput' maxLength={40} type='text' placeholder='Cardholder Name'></input>
            <div className='expDay'>
            <input className='monthIn' type="text" name="month" placeholder="MM" maxLength="2" size="2" />
            <span className='forSpan'> /</span>
            <input className='yearIn' type="text" name="year" placeholder="YY" maxLength="2" size="2" />
            </div>
        </div>
    </Greycard>
  )
}

export default Violetcard