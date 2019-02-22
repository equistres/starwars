import React from 'react';
import Logo from '../images/logo.png'

function Navigation(){
    return(
        <nav className="navbar">
        <img src={Logo} width="50px" alt="StarWars React App"/>
            <span className="text-white float-left">Star Wars Characters</span>
        </nav>
    )
}

export default Navigation



