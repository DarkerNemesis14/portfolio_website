import { useEffect, useContext } from 'react';

// import context
import { PageContext } from '../../context/PageContext';

// import components
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import WorksSection from '../sections/WorksSection';
import TeamSection from '../sections/TeamSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Master = () => {
    const { dispatch } = useContext(PageContext)

    useEffect(() => {
      dispatch({ type: "MASTER" })
    },[])

    return (
      <>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </>
    );
}
 
export default Master;