import "./AboutHome.css"

const AboutSection = () => {
    return (
        <section className="abouthome">
            <div className="text" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <p className="head">About Me</p>
                <div className="lines">
                    <span></span>
                    <span></span>
                </div>
                <p className="details">I love to <span>UNDERSTAND</span>.</p>
            </div>
        </section>
    );
}
 
export default AboutSection;