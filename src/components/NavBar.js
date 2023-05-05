import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { CurrentUserContext } from '../App'

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext)
    const loggedInIcons = (
        <>{currentUser?.username}</>
    )
    const loggedOutIcons = (
        <>
            <NavLink activeClassName={styles.Active} className={styles.NavLink} to='/signin'><i className="fas fa-sign-in-alt"></i>Sign In</NavLink>
            <NavLink activeClassName={styles.Active} className={styles.NavLink} to='/signup'><i className="fas fa-user-plus"></i>Sign Up</NavLink>
        </>
    );
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink exact to='/'>
                    <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact activeClassName={styles.Active} className={styles.NavLink} to='/'><i className="fas fa-home"></i>Home</NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar