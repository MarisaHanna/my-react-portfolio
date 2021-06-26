import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MyProjects from '../MyProjects/MyProjects';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'


export default function Wrapper() {
    return (
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/projects" component={MyProjects} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
         </Switch>
    )}
