import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <div className='wrap header--flex'>
            <h1 className='header--logo'><a>Courses</a></h1>
            <nav>
                <ul className='header--signedout'>
                    <li><a>Sign Up</a></li>
                    <li><a>Sign In</a></li>
                </ul>
            </nav>
        </div>        
    </header>  

  )
}

export default Header