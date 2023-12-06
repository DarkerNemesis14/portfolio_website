import "./ExperienceSection.css"

// import icons
import { MdWork } from "react-icons/md";

const ExperienceSection = () => {
    return (
        <>
            <section className="experiencesection" id="experience">
                <div className="experienceinfo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="box">
                        <div className="icon">
                            <MdWork size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">Teacher Assistant</p>
                            <p>BRAC University</p>
                            <p>Jun 2022 - Dec 2023</p>
                        </div>
                    </div>
                </div>

                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Experience</p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
            </section>
        </>
    );
}
 
export default ExperienceSection;