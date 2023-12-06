import { useEffect, useContext } from 'react';

// import context
import { PageContext } from '../../context/PageContext';

// import components
import AboutHome from "../sections/AboutHome"
import EducationSection from "../sections/EducationSection"
import ActivitySection from "../sections/ActivitySection"
import ExperienceSection from "../sections/ExperienceSection"
import Footer from "../components/Footer"


const About = () => {
    const { dispatch } = useContext(PageContext)

    useEffect(() => {
        dispatch({ type: "ABOUT" })
    },[])

    return (
        <>
            <AboutHome />
            <EducationSection />
            <ActivitySection />
            <ExperienceSection />
            <Footer />
        </>
    );
}
 
export default About;