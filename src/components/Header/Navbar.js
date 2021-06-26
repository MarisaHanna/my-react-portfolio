import React from 'react'
import {  Layout, Header, Drawer, Content, Navigation } from 'react-mdl'
import { Link } from 'react-router-dom'
import PageRoutes from '../PageRoutes/PageRoutes'


export default function Navbar() {
    return (
        <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <PageRoutes/>
            </Content>
        </Layout>
    </div>
    )
}
