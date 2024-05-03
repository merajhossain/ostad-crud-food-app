import React from 'react';
import Logo from './Logo';
import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <>
            <Navbar className="p-0">
                <Navbar.Brand href="/" className="w-100 me-0 p-0">
                    <Logo />
                </Navbar.Brand>
            </Navbar>
            
            <ul className='custom-navs'>
                <span>MENU</span>
                <li>
                    {/* <Link to="/create-food"><i className="bi bi-cart-fill"></i> Create Food</Link> */}
                    <NavLink
                        to="/create-foods"
                        className={({ isActive }) =>
                        [
                        isActive ? "active" : "",
                        ].join(" ")
                        }
                        >
                        <i className="bi bi-cart-fill"></i> Create Food
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        [
                        isActive ? "active" : "",
                        ].join(" ")
                        }
                        >
                        <i className="bi bi-file-text"></i> All Foods
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;