import React from 'react'
import { Link } from 'react-router-dom'

//TODO create function to handle sign in

const UserSignIn = (props) => {
  return (
    <main>
        <div className="form--centered">
            <h2>Sign In</h2>
            
            <form>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value="" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value="" />
                <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={(e) => props.history.push('/')}>Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
            
        </div>
    </main>
  )
}

export default UserSignIn