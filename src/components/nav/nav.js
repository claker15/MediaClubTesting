import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"
import { Navbar, NavItem } from 'react-materialize'

function Nav() {


    return (
        <div className="navContainer">
            <Navbar className="nav"
                alignLinks="right"
                brand={<a href="/">Media Club</a>}
            >
                <NavItem href="/login">Login</NavItem>
            </Navbar>
        </div>
    )

}

export default Nav