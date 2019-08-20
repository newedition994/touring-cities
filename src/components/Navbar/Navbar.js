import React from 'react'
import './Navbar.scss'
import logo from '../../img/logo.jpeg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="tour cites logo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">tours</a>
                </li>
            </ul>
        </nav>
    )
}
