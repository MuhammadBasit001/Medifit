import React from 'react'
import { useState } from 'react'

const Footer = () => {
  const [count , setcount]  = useState(0)
  return (
    <div>
      <p>value : { count }</p>
      <button onClick={() => setcount(count+1)}>Add one number</button>
      
    </div>
  )
}

export default Footer
