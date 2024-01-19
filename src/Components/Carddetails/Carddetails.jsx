import React from 'react'
import './Carddetails.css'

const Carddetails = () => {
  return (
    <div className='bigBox'>
    <div className='whiteBox'>
        <h1 className='saerto'>CARDHOLDER NAME</h1>
          <input className="fullName" type="text1"  placeholder="First Name"/>
          <p className='errorOne'>Wrong format, letters only</p>
          <h2 className='saerto'>CARD NUMBER</h2>
          <input className="cardNumbersec" type="text2"  placeholder="Card Number"/>
          <p className='errorTwo'>Wrong format, numbers only</p>
          <h3 className='saerto'>Exp. Date (MM/YY)</h3>
          <input className='monthIn1' type="text4" placeholder="MM" maxLength="2" size="2" />
            <input className='yearIn3' type="text5"  placeholder="YY" maxLength="2" size="2" />
            <p className='errorThree'>Can’t be blank</p>
            <h4 className='saerto'>CVV</h4>
          <input className="cvv" type="text6"  placeholder="CCV"/>
          <p className='errorFour'>Can’t be blank</p>
          <button className='butOne'><span className='conSpan'>Confirm</span></button>
    </div>
    </div>
  )
}

export default Carddetails