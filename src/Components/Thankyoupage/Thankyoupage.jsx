import React from 'react'
import './Thankyoupage.css'
import Card from '../Card/card'

const Thankyoupage = () => {
  return (
    <Card>
    <div className='PickYes'></div>
    <h1 className='ThankYou'>THANK YOU!</h1>
    <h2 className='Cardadded'>We’ve added your card details</h2>
    <button className='ButTwo'><span className='ContinueSpan'>Continue</span></button>
    </Card>
  )
}

export default Thankyoupage