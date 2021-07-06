import React from 'react'
import { Grid, Cell} from 'react-mdl'
import Footer from '../components/Footer/Footer'
import MyProjects  from '../components/MyProjects/MyProjects'
import ProjectBanner from '../components/ProjectBanner/ProjectBanner'


export default function Projects() {
    return (
        <div>
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='project-grid'>
                 <Cell col={12}>
                   <ProjectBanner/>
                  <MyProjects/>
                 </Cell>     
            </Grid>
         </div>
         <Footer/>
    </div>
    )
}
