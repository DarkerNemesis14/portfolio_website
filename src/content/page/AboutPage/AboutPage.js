import "./AboutPage.css"
import ScrollBar from "../../component/Scrollbar/Scrollbar"
import bioPic from "../../component/Images/bioPic.jpg"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { FaUniversity, FaLaptopCode, FaRobot} from "react-icons/fa"
import { MdWork} from "react-icons/md"
import { HashLink } from "react-router-hash-link"

const AboutPage = () => {
    return (
        <section className="aboutPage">

            <nav
            data-aos="zoom-out"
            className="backButton">
                <HashLink to="/#about">
                    <HiArrowNarrowLeft color="white"/>
                </HashLink>
            </nav>

            <div className="intro">
                <div className="container">
                    <div className="image">
                        <img
                        data-aos="zoom-out"
                        src={ bioPic } alt="" />
                    </div>
                    <div
                    data-aos="zoom-out"
                    className="text">
                        <p className="head">About Me</p>
                        <div className="lines">
                            <span id="one"></span>
                            <span id="two"></span>
                        </div>
                        <p className="details">I love to explore and learn new things and dive deep into them.</p>
                    </div>
                </div>
            </div>
            
            <div className="main">
                <div className="container">
                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="card">
                        <div className="content">
                            <div className="contentBox">
                                <div className="img">
                                    <FaUniversity size="40px" color="gray" />
                                </div>
                                <p>Ed<span>ucation</span></p>
                                <div className="high">
                                    <p>Ed</p>
                                </div>
                            </div>
                            <div className="descript">
                                <p>SSC, Hsc</p>
                                <p>2017, 2019</p>
                                <p>Barishal Cadet College</p>
                                <br />
                                <p>BSC(CSE)</p>
                                <p>2020-Present</p>
                                <p>Brac University</p>
                            </div>
                        </div>
                    </div>

                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="card">
                        <div className="content">
                            <div className="contentBox">
                                <div className="img">
                                    <FaLaptopCode size="40px" color="gray" />
                                </div>
                                <p>Languages</p>
                                <div className="high">
                                    <p>Lg</p>
                                </div>
                            </div>
                            <div className="descript">
                                <p>C</p>
                                <p>C++</p>
                                <p>Python</p>
                                <p>Java</p>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>

                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="card">
                        <div className="content">
                            <div className="contentBox">
                                <div className="img">
                                    <FaRobot size="40px" color="gray" />
                                </div>
                                <p>Activities</p>
                                <div className="high">
                                    <p>AC</p>
                                </div>
                            </div>
                            <div className="descript">
                                <p>Executive</p>
                                <p>Robotics Club Brac University</p>
                                <br />
                                <p>Sensor and Circuit Team Member</p>
                                <p>BracU Duburi</p>
                                <br />
                                <p>Electronic Team Member</p>
                                <p>BracU Mongol Tori</p>
                            </div>
                        </div>
                    </div>

                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="card">
                        <div className="content">
                            <div className="contentBox">
                                <div className="img">
                                    <MdWork size="40px" color="gray" />
                                </div>
                                <p>Experience</p>
                                <div className="high">
                                    <p>Ed</p>
                                </div>
                            </div>
                            <div className="descript">
                                <p>No Job Experience Yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default AboutPage;