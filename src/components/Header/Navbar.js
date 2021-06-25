import React from 'react'
import {  Layout, Header, Drawer, Content, Navigation } from 'react-mdl'

export default function Navbar() {
    return (
        <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>
    )
}
