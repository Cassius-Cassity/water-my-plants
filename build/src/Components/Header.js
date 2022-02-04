import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Header.css"

function Header() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return(
        <div className='header'>
                <nav className="header-navs">
                    <Link id="home" to='/home'>Home</Link>
                    <Link id='plantlist' to='/plantlist'>PlantList</Link>

                    {!localStorage.getItem('token') &&
                    <Link id="login" to='/login'>login</Link>}

                    {!localStorage.getItem("token") &&
                    <Link id="signup" to='/signup'>Sign Up</Link>}

                    {localStorage.getItem("token") && 
                        <a id="logout" href="/" onClick={logout}>Logout</a>}
                </nav>
        </div>
    )
}

export default Header;