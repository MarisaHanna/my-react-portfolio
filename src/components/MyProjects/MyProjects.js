import React from 'react'
import { Card, CardText, CardTitle, CardSubtitle, CardBody, CardLink} from 'reactstrap'
import './style.css'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import employee from '../../images/employee.png'
import budgettracker from '../../images/budgettracker.png'
import fitnesstracker from '../../images/fitnesstracker.png'
import techblog from '../../images/techblog.png'

export default function MyProjects() {
    return (
        <div className= 'projects'>
            <div>
           <Card className= 'project-card'>
             <CardBody>
                 <CardTitle tag="h5">Group Project 1</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">API Fetch Method</CardSubtitle>
                </CardBody>
                         <img className='images' src={project1} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This application uses the API fetch method to retrieve specific recipes requsted from the user.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/lets-eat'>GitHub</CardLink>
                    <CardLink href='https://marisahanna.github.io/lets-eat/'>Deployed Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card >
             <CardBody>
                 <CardTitle tag="h5">Group Project 2</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Model-View-Controller (MVC) Pattern </CardSubtitle>
                     </CardBody>
                         <img className='images' src={project2} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This application uses the MVC model and get requests to dynamically render content stored in a MySQL database.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/Paws-and-Claws'>GitHub</CardLink>
                    <CardLink href='https://pawsandclawss.herokuapp.com/'>Deployed Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card >
             <CardBody>
                 <CardTitle tag="h5">Phantom Directory</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">First React Application </CardSubtitle>
                     </CardBody>
                         <img className='images' src={employee} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This project simulates an application that allows the user to search for all employees within their company. Search results can be narrowed down by either searching for a specific employee by name, or search for all the employees that are located in a specific state. All employee cards display the employees' name, email, phone, employee ID, and DOB.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/phantom-directory/tree/master'>GitHub</CardLink>
                    <CardLink href='https://marisahanna.github.io/phantom-directory/'>Delpoyed Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card >
             <CardBody>
                 <CardTitle tag="h5">PWA Budget Tracker</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"> MongoDB and Serviceworker </CardSubtitle>
                     </CardBody>
                         <img className='images' src={budgettracker} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This application simulates a budget tracker for users to keep a record of expenses for both on and off line use. The user can add, or subtract funds to ther transaction history. While online, the data is then stored in a database powered by MongoDB. When the user is offline, the service-worker.js file caches data to an indexedDB file. The data is then updated when the user returns to an online status.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/budgets-and-burritos'>GitHub</CardLink>
                    <CardLink href='https://budgetmyburrito.herokuapp.com/'>Deployed Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card >
             <CardBody>
                 <CardTitle tag="h5">Fitness Tracker </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Powered By MongoDB </CardSubtitle>
                     </CardBody>
                         <img className='images' src={fitnesstracker} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This application simulates a fitness tracker program that allows the user to define personal workout and fitness goals. Users can select the type, duration, number of repetitions, and the amount of sets their workout will consist of. The user's progress is recorded, and is then displayed in a chart setting as a visual guide for the user so they can see and track their milestones throughout their workouts.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/back-on-track'>GitHub</CardLink>
                    <CardLink href='https://mybadworkouts.herokuapp.com/'>Deployed Link</CardLink>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card >
             <CardBody>
                 <CardTitle tag="h5">MCV Tech Blog</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Authentication and Persistent Storage with MySQL </CardSubtitle>
                     </CardBody>
                         <img className='images' src={techblog} alt="Card image cap" />
                      <CardBody>
                     <CardText>
                     This application was created using the Model-View-Controller (MVC) pattern. Users are required to either login or create a username and password in order to comment, edit, and post articles to the blog page. The users' data is then persistently stored to a Mysql database. Handlebars.js was used for the templating language, Sequelize for the ORM, and express-sessions for authentication.
                     </CardText>
                    <CardLink href='https://github.com/MarisaHanna/log-and-blog'>GitHub</CardLink>
                    <CardLink href='https://log-my-blog.herokuapp.com/'>Deployed Link</CardLink>
                </CardBody>
            </Card>
            </div>
        </div>
    )
}
