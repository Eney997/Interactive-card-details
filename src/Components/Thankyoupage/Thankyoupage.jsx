import React from 'react'
import './Thankyoupage.css'
import Card from '../Card/Card'

const Thankyoupage = ({setConfirmed}) => {
  return (
    <Card>
      <div className='typb'>
    <div className='PickYes'></div>
    <h1 className='ThankYou'>THANK YOU!</h1>
    <h2 className='Cardadded'>We’ve added your card details</h2>
    <button className='ButTwo'onClick={()=> setConfirmed(false)}><span className='ContinueSpan'>Continue</span></button>
    </div>
    </Card>
  )
}

export default Thankyoupage