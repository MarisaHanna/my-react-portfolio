
import './App.css';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LandingPage from './Pages/Landingpage'
import MyProjects from '../src/Pages/Projects';
import AboutMe from '../src/Pages/AboutMe';



function App() {
  return (

 <Router>
    <div>
      <Navbar/>
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={MyProjects} />
            <Route path="/aboutme" component={AboutMe} />
          </Switch>
     </div>
  </Router>
  
 
  );
}

export default App;
