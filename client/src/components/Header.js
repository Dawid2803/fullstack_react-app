import React from 'react'
import { Link, NavLink } from 'react-router-dom';

//TODO: Include auth users details once authentication is in place

const Header = () => {
  return (
    <header>
        <div className='wrap header--flex'>
            <h1 className='header--logo'><Link to={'/'}>Courses</Link></h1>
            <nav>
                <ul className='header--signedout'>
                  <li>
                    <NavLink to={'/signup'}>Sign Up</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/signin'}>Sign In</NavLink>
                  </li>
                </ul>
            </nav>
        </div>        
    </header>  

  )
}

export default Header