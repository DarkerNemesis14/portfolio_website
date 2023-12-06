import "./ResearchSection.css"

// import icons
import { GiArchiveResearch } from "react-icons/gi";
import { SiArxiv } from "react-icons/si";

const ResearchSection = () => {
    return (
        <>
            <section className="researchsection" id="research">
                <div className="researchinfo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="box">
                        <div className="icon">
                            <GiArchiveResearch size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">Neural Networks</p>
                            <p>Connected Hidden Neurons (CHNNet): An Artificial Neural Network for Rapid Convergence</p>
                            <ul>
                                <li><a href="https://arxiv.org/abs/2305.10468" target="_blank"><SiArxiv /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Research</p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
            </section>
        </>
    );
}
 
export default ResearchSection;