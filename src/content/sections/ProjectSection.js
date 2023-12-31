import "./ProjectSection.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

// import icons
import { VscDebugAll } from "react-icons/vsc";
import { FaGit } from "react-icons/fa";

const ProjectSection = () => {
    return (
        <>
            <section className="projectsection" id="project">
                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Project</p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Carousel className="carousel" infiniteLoop centerMode showStatus={false} showThumbs={false} useKeyboardArrows={true}>
                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Skill Hub</p>
                                <p>A web application that connects undergrad students and companies.</p>
                                <ul>
                                    <li><a href="https://github.com/DeBug51/skill_hub" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Sonar Radar</p>
                                <p>A radar system that uses ultra-sonic sound to detect objects.</p>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/Sonar_Radar_with_Arduino" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Neural Network Repository</p>
                                <p>A simple library to test CHNNet with other feed forward layers.</p>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/NeuralNetworkAlgorithms" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Bowling Game</p>
                                <p>A simple Bowling game.</p>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/BowlingGame_OpenGL" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Portfolio Website</p>
                                <p>My portfolio website.</p>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/portfolio_website" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">Algorithms</p>
                                <p>The repository contains solutions to some popular algorithmic problems.</p>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/Algorithms" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">OAFF Robot</p>
                                <p>A simple robot that extinguishes fire avoiding obstacles in its path.</p>
                                <ul>
                                    <li><a href="https://github.com/DeBug51/Object_Avoiding_Fire_Fighter_Robot" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="projectinfo">
                            <div className="icon">
                                <VscDebugAll size="25px" color="black"/>
                            </div>
                            <div className="text">
                                <p className="head">CHNNet Tests</p>
                                <p>The repository contains codes for testing CHNNet against FNN using Tensorflow.</p>
                                <ul>
                                    <li><a href="https://github.com/ThesisG/CHNNetTests" target="_blank"><FaGit /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    );
}
 
export default ProjectSection;