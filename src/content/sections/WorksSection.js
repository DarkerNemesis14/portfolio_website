import "./WorksSection.css"
import proCover from "../images/robot.jpg"
import { Link } from "react-router-dom";

// import components
import Button from "../components/Button";

const WorksSection = () => {
    return (
        <section className="worksection" id="works">
            <div className="text" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <p className="head">My Works</p>
                <div className="lines">
                    <span id="one"></span>
                    <span id="two"></span>
                </div>
                <p className="details">I love UNORTHODOX ways.</p>
                <Link to="/projects"><Button text={"see details"}/></Link>
            </div>
            <div className="image">
                <img data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom" src={ proCover } alt="" />
            </div>
        </section>
    );
}
 
export default WorksSection;