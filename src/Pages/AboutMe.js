import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Profile from '../images/profile.jpg'
export default function AboutMe() {
    return (
        <div>
         <div className= 'contact'>
          <div className='contact-body'>
          <Grid className= 'contact-grid'>
              <Cell col={6}>
                  <h2>Marisa Hanna</h2>
                  <img className='profile-img' src={Profile} alt='profile pic'/>
                  <div className= 'p-1'>
                      <p>Hi there! I'm Marisa. I am a recent graduate in Software Engineering from University of Washington. I am passionate about learning, and I'm so excited for all the new opportunities my developing skill set will bring. I'm currently working with programming languages such as HTML5, CSS, JavaScript, and Node.js., and React. However, there's more to come. So stay tuned!</p> 
                  </div>
              </Cell>
              <Cell col={6}>
               <div className= 'contact-list'>
                  <div className= 'p-2'>
                      <p>As a developer, I'm always continuing to grow my knowledge in successful web application. It is extremely rewarding to work with a team of talented individuals who are able bring something that once only existed in the realm of imagination, and find working solutions in order to bring tangible life to it.</p>
                  </div>
                  <div className= 'p-3'>
                      <p>I'm a Washington state native living on my hobby farm in the small town of Olalla, Wa. Don't let the small town life fool you though. I have lived all over the world, traveled to some great places, and met some extaordianry people. I am a wife, a mother to my two children, and a published author. In my free time, I enjoy horseback riding, biking, fishing, hiking, kayaking, rollerblading, and walking the dog.</p>
                   </div>
                  </div>
              </Cell>   
          </Grid>
         </div>
      </div> 
    </div>
         
    )
}
