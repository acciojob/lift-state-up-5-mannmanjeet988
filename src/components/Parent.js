import React,{useState} from 'react'
import Child from './Child'
import './../styles/App.css';

const Parent = () => {

  return (
    <div className='parent'>
    <h1>Parent Component</h1>
        
        <Child />
        
    </div>
    
  )
}

export default Parent