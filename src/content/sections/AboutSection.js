import "./AboutSection.css"
import bioPic from "../images/bioPic.jpg"
import { Link } from "react-router-dom";

// import components
import Button from "../components/Button";

const AboutSection = () => {
    return (
        <section className="aboutsection" id="about">
            <div className="image">
                <img data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom" src={ bioPic } alt=""/>
            </div>
            <div className="text" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <p className="head">About Me</p>
                <div className="lines">
                    <span></span>
                    <span></span>
                </div>
                <p className="details">I love to <span>UNDERSTAND</span>.</p>
                <Link to="/about"><Button text={"see details"}/></Link>
            </div>
        </section>
    );
}
 
export default AboutSection;