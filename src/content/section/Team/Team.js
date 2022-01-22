import "./Team.css"
import sadatPic from "../../component/Images/sadatPic.jpg"
import tamimPic from "../../component/Images/tamimPic.jpg"
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { DiWebplatform } from "react-icons/di"

const Team = () => {
    return (
        <section className="team" id="team">
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="title">
                <p className="mainTitle">Our Team</p>
                <p className="subTitle"><span id="line1"></span> De BuG <span id="line2"></span></p>
            </div>

            <div className="container">
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="card">
                    <div className="content">
                        <div className="imageBox"><img src={sadatPic} alt="" /></div>
                        <div className="contentBox">
                            <p>Rafiad Sadat<br /><span>Pursuing BSc(CSE)<br />Brac University</span></p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="https://github.com/DarkerNemesis14" target="_blank"><FiGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/rafiad-sadat-shahir-5359651ba" target="_blank"><FaLinkedinIn /></a></li>
                        <li><a href="/"><DiWebplatform /></a></li>
                    </ul>
                </div>

                <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="card">
                    <div className="content">
                        <div className="imageBox"><img src={tamimPic} alt="" /></div>
                        <div className="contentBox">
                            <p>Mashrufa Tamim<br /><span>Pursuing BSc(CSE)<br />Brac University</span></p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="https://github.com/MashrufaTamim-14" target="_blank"><FiGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/mashrufa-tamim-1a9bba209/" target="_blank"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Team;