import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

//import context provider
import { PageContextProv } from './context/PageContext';

// import contents
import Navbar from "./content/components/Navbar"
import Master from './content/pages/Master';
import About from './content/pages/About';
import Works from './content/pages/Works';
import Error404 from './content/pages/Error404';
import ScrollToTop from './content/components/ScrollToTop';
import Scrollbar from './content/components/Scrollbar';

function App() {
  useEffect (() => {
    Aos.init({ duration:1500 });
  }, [])

  return (
    <>
      <PageContextProv>
        <Router>
          <Scrollbar />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Master } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/projects" component={ Works } />
            <Route component={ Error404 } />
          </Switch>
        </Router>
      </PageContextProv>
    </>
  );
}

export default App;