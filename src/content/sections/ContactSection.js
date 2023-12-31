import "./ContactSection.css"

// import icons
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { IoLocationSharp } from "react-icons/io5"
import { ImFacebook } from "react-icons/im"
import { FiGithub } from "react-icons/fi"

// import files
import cv from "../files/RafiadPortfolioCV.pdf"

// import components
import Button from "../components/Button"

const ContactSection = () => {
    return (
        <section className="contactsection" id="contact">
            <div className="container">
                <div className="contactinfo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="box">
                        <div className="icon">
                            <BsFillPersonFill size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">Name</p>
                            <p>Rafiad Sadat</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <GrMail size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">Email</p>
                            <p>rafiadshahir@gmail.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <IoLocationSharp size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <a href={cv} download="RafiadCV">
                        <Button text={"get cv"}/>
                    </a>
                </div>

                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Contact Me</p>
                    <p className="line"></p>
                    <p className="subtitle">Let's keep communicating.</p>
                </div>
            </div>
            
            <div className="links" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <ul>
                    <li><a href="https://www.facebook.com/rafiadsadatshahir.14" target="_blank"><ImFacebook /></a></li>
                    <li><a href="https://twitter.com/rafiadsadat14" target="_blank"><FaTwitter /></a></li>
                    <li><a href="https://github.com/DarkerNemesis14" target="_blank"><FiGithub /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCUmOK2ICcPH-bFYrzXgk65g" target="_blank"><FaYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/rafiad-sadat-shahir-5359651ba" target="_blank"><FaLinkedinIn /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactSection;