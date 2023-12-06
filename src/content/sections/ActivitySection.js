import "./ActivitySection.css"

// import icons
import { FaLaptopCode } from "react-icons/fa"

const ActivitySection = () => {
    return (
        <>
            <section className="activitysection" id="activity">
                <div className="title" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <p className="maintitle">Activity</p>
                    <p className="line"></p>
                    <p className="line"></p>
                </div>
                
                <div className="activityinfo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="box">
                        <div className="icon">
                            <FaLaptopCode size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">BRACU Duburi</p>
                            <p>Member</p>
                            <p>Sensor & Circuit</p>
                            <p>Jun 2021 - Mar 2022</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <FaLaptopCode size="25px" color="black"/>
                        </div>
                        <div className="text">
                            <p className="head">BRACU Mongol Tori</p>
                            <p>Member</p>
                            <p>Electornics</p>
                            <p>Dec 2021 - Mar 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ActivitySection;