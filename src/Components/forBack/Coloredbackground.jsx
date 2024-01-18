import React from 'react'
import './Coloredbackground.css'


const Coloredbackground = (props) => {
  return (
    <div className='coloredBack'>{props.children}</div>
  )
}

export default Coloredbackground