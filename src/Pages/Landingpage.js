import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Banner from '../components/Banner/Banner'
import ProfilePic from '../components/ProfilePic/ProfilePic'


export default function Landingpage() {
    return (
       <div className= 'profile-page'>
         <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                 <Cell col={12}>
                    <ProfilePic/>
                    <Banner/>
                 </Cell>     
            </Grid>
         </div>
       </div> 
        )}
  