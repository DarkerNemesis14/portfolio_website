import './Master.css';
import { useEffect } from 'react';
import Navbar from "../../component/Navbar/Navbar"
import Scrollbar from '../../component/Scrollbar/Scrollbar';
import Home from '../../section/Home/Home';
import About from '../../section/About/About';
import Project from '../../section/Project/Project';
import Team from '../../section/Team/Team';
import Contact from '../../section/Contact/Contact';
import Footer from '../../component/Footer/Footer';

const Master = () => {
    return (
        <>
        <Scrollbar />
        <Navbar />
        <Home />
        <About />
        <Project />
        <Team />
        <Contact />
        <Footer />
      </>
    );
}
 
export default Master;