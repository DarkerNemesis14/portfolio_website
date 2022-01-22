import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Master from './content/page/Master/Master';
import AboutPage from './content/page/AboutPage/AboutPage';
import ProjectPage from './content/page/ProjectPage/ProjectPage';
import Error404 from './content/page/Error404/Error404';
import ScrollToTop from './content/component/ScrollToTop/ScrollToTop';
import Scrollbar from './content/component/Scrollbar/Scrollbar';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect (() => {
    Aos.init({ duration:1500 });
  }, [])

  return (
    <>
      <Router>
        <Scrollbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={ Master } />
          <Route exact path="/about" component={ AboutPage } />
          <Route exact path="/projects" component={ ProjectPage } />
          <Route component={ Error404 } />
        </Switch>
      </Router>
    </>
  );
}

export default App;