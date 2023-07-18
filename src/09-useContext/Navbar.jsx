import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {/* console.log(args);  */}
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {/* console.log(args);  */}
                                About
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {/* console.log(args);  */}
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link> */}
        </>
    )
}
