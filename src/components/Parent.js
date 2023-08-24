import React,{useState} from 'react'
import Child from './Child'
import './../styles/App.css';

const Parent = () => {

  return (
    <div className='parent'>
    
        
        <Child />
        
    </div>
    
  )
}

export default Parent