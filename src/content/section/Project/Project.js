import "./Project.css"
import proCover from "../../component/Images/proCover.jpg"
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <section className="project" id="project">
            <div className="container">
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="text">
                    <p className="head">My Projects</p>
                    <div className="lines">
                        <span id="one"></span>
                        <span id="two"></span>
                    </div>
                    <p className="details">I also love to do projects on the topics I learn.</p>
                    <Link to="/projects"><button>Show me more</button></Link>
                </div>
                <div className="image">
                    <img
                    data-aos="zoom-out"
                    data-aos-anchor-placement="bottom-bottom"
                    src={ proCover } alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default Project;