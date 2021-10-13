import React from 'react'
import {  Layout, Header, Drawer, Content, Navigation } from 'react-mdl'
import { Link } from 'react-router-dom'
import Resume from '../../images/resume.pdf'



export default function Navbar() {
    return (
       
    <div className="demo-big-content">
        <Layout>
            <Header className= 'header' title="Marisa Hanna React Portfolio" scroll>
                <Navigation>
                    <Link to="/">Profile</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <a href={Resume}>Resume</a>
                    <a href="https://www.linkedin.com/in/marisa-hanna-7a816099/">Contact</a>
                </Navigation>
            </Header>
            <Drawer title="Marisa Hanna React Portfolio">
                <Navigation>
                    <Link to="/">Profile</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <a href={Resume}>Resume</a>
                    <a href="https://www.linkedin.com/in/marisa-hanna-7a816099/">Contact</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
   
    )
}
