import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//sign in form, checks to see if user is already in the database and signs him in after validation

const UserSignIn = (props) => {
  const { context } = props;
  const { from } = props.location.state || { from: '/'};
  const [username, setUsername]  = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleUserSignIn = (e) => {
    e.preventDefault();
    if(username === '' || password === ''){
      setErrors(['Please enter a email address and password']);
    }else {
      context.actions.signIn(username, password)
      .then(user => {
        if(user === null){
          setErrors(['Sign in was unsuccessfull']);
        }else{
          console.log(`${username} signed in successfully`);
          props.history.push(from);
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
            
            <form onSubmit={(e) => handleUserSignIn(e)}>
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