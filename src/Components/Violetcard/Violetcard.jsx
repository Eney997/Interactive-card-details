import React from 'react'
import Greycard from '../Greycard/Greycard'
import './Violetcard.css'

const Violetcard = () => {
    

  return (
    <Greycard>
        <div className='secondCard'>
            <div className='violetsCircle'></div>
            <h1 className='carldNumber'>0000 0000 0000 0000</h1>
            <h2 className='cardHolder'>CARDHOLDER NAME</h2>
            <div className='forSvv'>
            <h3 className='YY'>00</h3>
            <span className='slash'>/</span>
            <h4 className='MM'>00</h4>
            </div>
        </div>
    </Greycard>
  )
}

export default Violetcard