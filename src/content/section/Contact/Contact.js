import "./Contact.css"
import { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { IoLocationSharp } from "react-icons/io5"
import { ImFacebook } from "react-icons/im"
import { FiGithub } from "react-icons/fi"

const Contact = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name && email && message) {
        emailjs.sendForm('service_s9g1w1p', 'template_2wbjafi', form.current, 'user_74v77UfBs3cxkntDDw47e')
            .then((result) => {
                alert("Email Sent!");
            }, (error) => {
                alert("Error Sending the Mail")
        });
        setName("");
        setEmail("");
        setMessage("");
        }
        else{
            alert("input fields cannot be left empty")
        }   
    };

    return (
        <section className="contact" id="contact">
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="content">
                <p className="title">Contact Me</p>
                <p className="subtitle">Whether you have any query or would like to have a cup of coffee, I'd be happy to be in touch.</p>
            </div>

            <div className="container">
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="contactInfo">
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
                </div>

                <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="contactForm">
                    <p className="formHead">Send Email</p>
                    
                    <form ref={form}>
                        <div className="inputBox">
                            <input type="text" name="userName" onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={ name } required/>
                            <span>Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="userEmail"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={ email } required/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea name="message"
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            value={ message } required></textarea>
                            <span>Your Message</span>
                        </div>
                        <div className="inputBox">
                            <button onClick={sendEmail}>Send</button>
                        </div>
                    </form>
                    
                </div>
            </div>

            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="links">
                <ul>
                    <li><a href="https://www.facebook.com/rafiadsadatshahir.14" target="_blank"><ImFacebook /></a></li>
                    <li><a href="https://www.instagram.com/rafiad.sadat" target="_blank"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com/RafiadSadat" target="_blank"><FaTwitter /></a></li>
                    <li><a href="https://github.com/DarkerNemesis14" target="_blank"><FiGithub /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCUmOK2ICcPH-bFYrzXgk65g" target="_blank"><FaYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/rafiad-sadat-shahir-5359651ba" target="_blank"><FaLinkedinIn /></a></li>
                </ul>
            </div>

        </section>
    );
}

export default Contact;