import React from 'react'
import { Link, NavLink } from 'react-router-dom';

//TODO: Include auth users details once authentication is in place

const Header = (props) => {
  const { context } = props;
  const {authenticatedUser} = context;

  return (
    <header>
        <div className='wrap header--flex'>
            <h1 className='header--logo'><Link to='/'>Courses</Link></h1>
            <nav>
            {authenticatedUser ? (
              <ul className='header--signedin'>
                <li>Welcome, {authenticatedUser.user.firstName} {authenticatedUser.user.lastName}</li>
                <li><NavLink to="/signout">Sign Out</NavLink></li>
              </ul>
            )
            :
            (
              <ul className='header--signedout'>
                  <li>
                    <NavLink to='/signup'>Sign Up</NavLink>
                  </li>
                  <li>
                    <NavLink to='/signin'>Sign In</NavLink>
                  </li>
                </ul>
            )
            }
            </nav>
        </div>        
    </header>  

  )
}

export default Header