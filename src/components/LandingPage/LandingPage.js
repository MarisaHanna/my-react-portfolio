import React from 'react'
import { Grid, Cell } from 'react-mdl'


export default function LandingPage() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}></Cell>
                <img className= 'avatar'alt='profile pic' src='https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-blonde-3-1024.png'/>
            </Grid>
            
            
        </div>
    )
}
