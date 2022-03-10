import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to="/categoria/1" className='nav__link'>cat1</NavLink>
            <NavLink to="/categoria/2" className='nav__link'>cat2</NavLink>
            <NavLink to="/categoria/3" className='nav__link'>cat3</NavLink>
        </nav>
    );
}

export default Nav;