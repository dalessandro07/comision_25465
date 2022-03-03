import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header id="layout-header" className='header'>
            <h1 className='header__title'>Mi E-Commerce</h1>
            <span className="material-icons">
                shopping_cart
            </span>
            <Nav />
        </header>
    )
}

export default Header