import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = (props) => {
    const {context} = props; 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleCreate = (e) => {
      const newUser = {
        firstName,
        lastName,
        emailAddress,
        password
      };

      context.data.createUser(newUser)
        .then(data => {
          if(data.errors){
            setErrors(data);
          }else if(data){
            //Sign in user after user has been created
            context.actions.signIn(emailAddress, password)
              .then(props.history.push('/'));
          }else{
            props.history.push('/error');
          }
        })
    }

  return (
    <main>
        <div className="form--centered">
            <h2>Sign Up</h2>
            
            <form onSubmit={handleCreate}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={() => props.history.push('/')}>Cancel</button>
            </form>
            <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
        </div>
    </main>
  )
}

export default UserSignUp