import React from 'react'
import { Grid, Cell} from 'react-mdl'
import Navbar from '../components/Header/Navbar'
import MyProjects  from '../components/MyProjects/MyProjects'


export default function Projects() {
    return (
        <div>
           <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                 <Cell col={12}>
                 <MyProjects/>
                     
               </Cell>     
            </Grid>
         </div>
          
        </div>
    )
}
