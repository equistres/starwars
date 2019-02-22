import React, { PureComponent } from 'react'
import Logo from '../images/logo.png'


export default class Navigation extends PureComponent {
  render() {
    console.log('DIBUJO NAV')
    return(
        <nav className="navbar">
        <img src={Logo} width="50px" alt="StarWars React App"/>
            <span className="text-white float-left">Star Wars Characters</span>
        </nav>
    )
  }
}



