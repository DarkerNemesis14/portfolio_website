import "./About.css"
import bioPic from "../../component/Images/bioPic.jpg"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="image">
                    <img
                    data-aos="zoom-out"
                    data-aos-anchor-placement="bottom-bottom"
                    src={ bioPic } alt=""
                    />
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="text"
                    >
                    <p className="head">About Me</p>
                    <div className="lines">
                        <span id="one"></span>
                        <span id="two"></span>
                    </div>
                    <p className="details">I love to explore and learn new things and dive deep into them.</p>
                    <Link to="/about"><button>Show me more</button></Link>
                </div>
            </div>
        </section>
    );
}
 
export default About;