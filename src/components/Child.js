import React,{useState} from 'react'
import './../styles/App.css';

const Child = () => {

  const[isLoggedIn, setIsLoggedIn] =useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true);
    }

  return (
    <div>
        {
          !isLoggedIn && 
          <form className="form-container" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text"/><br/>
        
          <label>Password:</label>
          <input type="text"/>
          <br/>
          <button type="submit">Log In</button>
       </form>
       }
        {
          isLoggedIn && <p>You are logged in!</p>
      }
        
    </div>
  )
}

export default Child