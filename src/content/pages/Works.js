import { useEffect, useContext } from 'react';

// import context
import { PageContext } from '../../context/PageContext';

// import components
import WorksHome from '../sections/WorksHome';
import ProjectSection from "../sections/ProjectSection"
import ResearchSection from "../sections/ResearchSection"
import Footer from "../components/Footer"

const Works = () => {
    const { dispatch } = useContext(PageContext)
    useEffect(() => {
        dispatch({ type: "WORKS" })
    },[])

    return (
        <>
            <WorksHome />
            <ProjectSection />
            <ResearchSection />
            <Footer />
        </>
    );
}
 
export default Works;