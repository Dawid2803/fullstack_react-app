import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const UserSignIn = (props) => {
  const { context } = props;
  const [username, setUsername]  = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleUserSignIn = (props) => {
    if(username === '' || password === ''){
      setErrors(['Please enter a email address and password']);
    }else {
      context.action.SignIn(username, password)
      .then(user => {
        if(user === null){
          setErrors(['Sign in was unsuccessfull']);
        }else{
          props.history.push('/');
          console.log(`${username} signed in successfully`);
        }
      })
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      })
    }
  }
  

  return (
    <main>
        <div className="form--centered">
            <h2>Sign In</h2>
            
            <form onSubmit={handleUserSignIn}>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={(e) => props.history.push('/')}>Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
            
        </div>
    </main>
  )
}

export default UserSignIn