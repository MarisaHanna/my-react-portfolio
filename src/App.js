
import Footer from './components/Footer/Footer';
import './App.css';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LandingPage from './Pages/Landingpage'
import MyProjects from '../src/Pages/Projects';
import AboutMe from '../src/Pages/AboutMe';
import Resume from '../src/Pages/Resume'
import Contact from '../src/Pages/Contact'









function App() {
  return (
 <Router>
  <div>
    <Navbar/>
      
       
       <Switch>
        <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={MyProjects} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
       <Footer/>
    
  </div>
   </Router>
  
 
  );
}

export default App;
