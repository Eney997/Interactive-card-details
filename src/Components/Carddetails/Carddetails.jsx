import React from 'react'
import './Carddetails.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Carddetails = () => {

  const [valueCvv, setValueCvv] = useState('');

  const handleInputChangeCvv = (e) => {
    let inputValueCvv = e.target.value;
    inputValueCvv = inputValueCvv.slice(0, 3);
    setValueCvv(inputValueCvv);
  };


  const [valueCard, setValueCard] = useState('');

    const handleInputChangeCard = (e) => {
      let inputValueCard = e.target.value;
      inputValueCard = inputValueCard.slice(0, 19);
      setValueCard(inputValueCard);
    };

  return (
    <Card>
    <div className='whiteBox'>
        <h1 className='saerto'>CARDHOLDER NAME</h1>
        <input className="fullName"  maxLength={40} type="text1" placeholder="First Name"></input>
          <p className='errorOne'>Wrong format, letters only</p>
          <h2 className='saerto'>CARD NUMBER</h2>
          <input 
          onChange={handleInputChangeCard} 
          value={valueCard} 
          className="cardNumbersec" 
          type="text2" 
           placeholder="Card Number"/>
          <p className='errorTwo'>Wrong format, numbers only</p>
          <h3 className='saerto'>Exp. Date (MM/YY)</h3>
          <input className='monthIn1' type="text4" placeholder="MM" maxLength="2" size="2" />
            <input className='yearIn3' type="text5"  placeholder="YY" maxLength="2" size="2" />
            <p className='errorThree'>Can't be blank</p>
            <h4 className='saerto'>CVV</h4>
          <input
          value={valueCvv} 
          onChange={handleInputChangeCvv} 
           className="cvv" 
           type="text6"  
           placeholder="CCV"/>
          <p className='errorFour'>Can't be blank</p>
          <button className='butOne'><span className='conSpan'>Confirm</span></button>
    </div>
    </Card>
  )
}

export default Carddetails
        
        