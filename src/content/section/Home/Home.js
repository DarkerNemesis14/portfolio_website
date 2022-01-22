import "./Home.css";
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <section className="home" id="home">
                <div className="homeContent">
                    <div data-aos="zoom-out"
                        data-aos-anchor-placement="bottom-bottom"
                        className="text"
                    >
                        <p className="greet">Hello there, I'm</p>
                        <p className="name">Rafiad Sadat</p>
                        <p className="detail">And I work on <span>
                            <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={80}
                            words={["Web Development", "Robotics", "PCB Designing", "Android Development", "Artificial Intelligence"]}
                            />
                        </span></p>
                    </div>

                    <div data-aos="zoom-out"
                    className="panels"
                    >
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                    </div>
                </div>
        </section>
    );
}

export default Home;