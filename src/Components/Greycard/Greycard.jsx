import React from 'react'
import './Greycard.css'
import Coloredbackground from '../forBack/Coloredbackground'


const Greycard = (props) => {
   
    

  return (
    <Coloredbackground>
   <div className='greyCardClass'>{props.children}
        <div className='blackDivsquear'></div>
        <div className='cvvDiv'>
          <h1 className='cvvNums'>000</h1>
        </div>
        <div className='greyLines'></div>
   </div>
   </Coloredbackground>
  )
}

export default Greycard