import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
    return (
        <header id="layout-header" className='header'>
            <Link to="/">
                <h1 className='header__title'>Mi E-Commerce</h1>
            </Link>
            <Link to="/carrito">
                <span className="material-icons">
                    shopping_cart
                </span>
            </Link>
            <Nav />
        </header>
    )
}

export default Header