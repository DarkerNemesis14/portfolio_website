import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-scroll"
import {CgMenuRight } from "react-icons/cg"

const Navbar = () => {
    const[mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="navbar">
            <div className="headName">
                <Link to="home" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>
                    <p className="name"><span id="R">R</span>afiad <span id="S">S</span>adat</p>
                </Link>
            </div>
            
            {/* <div className={ mobileMenu ? "mobileMenu" : "menu" }> */}
                <ul className={ mobileMenu ? "menu active" : "menu" }>
                    <li><Link to="about" className="link" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>About</Link></li>
                    <li><Link to="project" className="link" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Projects</Link></li>
                    <li><Link to="team" className="link" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Team</Link></li>
                    <li><Link to="contact" className="link" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Contact</Link></li>
                </ul>
            {/* </div> */}

            <div className="menuIcon">
                <CgMenuRight onClick={() => {setMobileMenu(!mobileMenu)}}/>
            </div>

        </nav>
    );
}

export default Navbar
