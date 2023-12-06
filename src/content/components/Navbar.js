import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-scroll"
import { useContext } from 'react';
import { HashLink } from "react-router-hash-link"

// import context
import { PageContext } from '../../context/PageContext';

// import icons
import { CgMenuRight } from "react-icons/cg"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const context = useContext(PageContext)

    return (
        <nav className="navbar" data-aos="zoom-out">
            {context.master && (<>
                <Link to="home" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>
                    <p className="name"><span>R</span>afiad <span>S</span>adat</p>
                </Link>

                <ul className={ mobileMenu ? "menu active" : "menu" }>
                    <li><Link className="link" to="about" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>About</Link></li>
                    <li><Link className="link" to="works" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Works</Link></li>
                    <li><Link className="link" to="team" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Team</Link></li>
                    <li><Link className="link" to="contact" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Contact</Link></li>
                </ul>
            </>)}

            {context.about && (
            <>
                <div className="backbutton">
                    <HashLink to="/#about">
                        <p className="name"><span>B</span>ack</p>
                    </HashLink>
                </div>

                <ul className={ mobileMenu ? "menu active" : "menu" }>
                    <li><Link className="link" to="education" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Education</Link></li>
                    <li><Link className="link" to="activity" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Activity</Link></li>
                    <li><Link className="link" to="experience" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Experience</Link></li>
                </ul>
            </>)}

            {context.works && (
            <>
                <div className="backbutton">
                    <HashLink to="/#works">
                        <p className="name"><span>B</span>ack</p>
                    </HashLink>
                </div>

                <ul className={ mobileMenu ? "menu active" : "menu" }>
                    <li><Link className="link" to="project" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Project</Link></li>
                    <li><Link className="link" to="research" spy={ true } smooth={ true } offset={ 0 } duration={ 1000 }>Research</Link></li>
                </ul>
            </>)}
            
            <div className="menuIcon">
                <CgMenuRight onClick={() => {setMobileMenu(!mobileMenu)}}/>
            </div>
        </nav>
    );
}

export default Navbar