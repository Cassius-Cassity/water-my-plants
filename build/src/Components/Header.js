import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return(
        <header className="App-header">
            <h1>Water My Plants</h1>
            <nav className="header-nav">
                <Link to='/'><button className='button'>Home</button></Link>
                <Link to='/login'><button className='button'>login</button></Link>
                <Link to='/signup'><button className='button'>Sign Up</button></Link>
            </nav>
        </header>
    )
}

export default Header;