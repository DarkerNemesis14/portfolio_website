import "./EducationSection.css"

// import icons
import { FaUniversity } from "react-icons/fa"

const EducationSection = () => {
    return (
        <>
            <section className="educationsection" id="education">
                <div className="educationinfo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="box">
                        <div className="icon">
                            <FaUniversity size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">BSc in CSE</p>
                            <p>BRAC University</p>
                            <p>CGPA: 3.93</p>
                            <p>2020 - 2023</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <FaUniversity size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">HSC</p>
                            <p>Barishal Cadet College</p>
                            <p>GPA: 5.0</p>
                            <p>2017 - 2019</p>
                        </div>
                    </div>
                </div>

                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Education</p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
            </section>
        </>
    );
}
 
export default EducationSection;