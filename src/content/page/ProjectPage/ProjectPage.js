import "./ProjectPage.css"
import ScrollBar from "../../component/Scrollbar/Scrollbar"
import Footer from "../../component/Footer/Footer"
import { HashLink } from "react-router-hash-link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";

SwiperCore.use([EffectCoverflow,Pagination]);

const ProjectPage = () => {
    return (
        <>
        <section className="projPage">
            <ScrollBar />

            <nav
            data-aos="zoom-out"
            className="backButton">
                <HashLink to="/#project">
                    <HiArrowNarrowLeft color="white"/>
                </HashLink>
            </nav>

            <div className="start">
                <div className="container">
                    <div
                    data-aos="zoom-in"
                    className="text">
                        <p className="head">My Projects</p>
                        <div className="lines">
                            <span id="one"></span>
                            <span id="two"></span>
                        </div>
                        <p className="details">I also love to do projects on the topics I learn.</p>
                    </div>
                </div>
            </div>

            <div className="master">
                <div className="holder">
                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="header">
                        <div className="text">
                            <p className="head">Robotics</p>
                            <div className="lines">
                                <span id="one"></span>
                                <span id="two"></span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        centeredSlides
                        loop={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }}
                        pagination={{
                            "clickable":true,
                            "dynamicBullets":true
                        }}
                        className="mySwiper">

                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="contentBox">
                                        <p>Object Avoiding Robot<br /><br /><span>A robot that can detect object in front it and avoid the object.</span></p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/ObjectAvoidingRobot" target="_blank"><FaGithub /></a></li>
                                    <li><a href="https://www.youtube.com/watch?v=E0pw4mDVzcM" target="_blank"><FaYoutube /></a></li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="contentBox">
                                        <p>Sonar Radar<br /><br /><span>A Radar System which uses an Ultra Sonic Sound Sensor.</span></p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/Sonar_Radar_with_Arduino" target="_blank"><FaGithub /></a></li>
                                    <li><a href="https://www.youtube.com/watch?v=2tyzmRmRQes" target="_blank"><FaYoutube /></a></li>
                                </ul>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>


            <div className="master">
                <div className="holder">
                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="header">
                        <div className="text">
                            <p className="head">Web Development</p>
                            <div className="lines">
                                <span id="one"></span>
                                <span id="two"></span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        centeredSlides
                        loop={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }}
                        pagination={{
                            "clickable":true,
                            "dynamicBullets":true
                        }}
                        className="mySwiper">

                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="contentBox">
                                        <p>Portfolio Website<br /><br /><span>The website you are corrently visiting.</span></p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/PortfolioWebsite" target="_blank"><FaGithub /></a></li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="contentBox">
                                        <p>Vogue<br /><br /><span>A social media platform(Corrently Under Development).</span></p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a href="https://github.com/DarkerNemesis14/Vogue" target="_blank"><FaGithub /></a></li>
                                </ul>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>


            <div className="master">
                <div className="holder">
                    <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="header">
                        <div className="text">
                            <p className="head">PCB Designing</p>
                            <div className="lines">
                                <span id="one"></span>
                                <span id="two"></span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        centeredSlides
                        loop={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }}
                        pagination={{
                            "clickable":true,
                            "dynamicBullets":true
                        }}
                        className="mySwiper">

                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="contentBox">
                                        <p>PCB RC Car<br /><br /><span>The PCB design for a RC Car which has a 6-axis Robotic Arm operated by Servo Motors.</span></p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a href="https://www.linkedin.com/posts/rafiad-sadat-shahir-5359651ba_rc-car-with-a-6-axis-robotic-arm-pcb-activity-6863715256020021248-QJJI" target="_blank"><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
}
 
export default ProjectPage;