import "./HomeSection.css"
import { Typewriter } from "react-simple-typewriter"

const HomeSection = () => {
    return (
        <section className="homesection" id="home">
            <div className="text" data-aos="zoom-out" data-aos-anchor-placement="bottom-bottom">
                <p className="greet">Hello there, I'm</p>
                <p className="name">Rafiad Sadat</p>
                <p className="detail">And I work on</p>
                <p className="typed"><Typewriter
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={80}
                        words={["Neural Networks", "Web Development", "Blockchains", "Web Security", "Robotics", "Quantum Computing"]}
                    />
                </p>
            </div>
        </section>
    );
}

export default HomeSection;