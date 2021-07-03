import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle} from 'reactstrap'
import { SliderData } from '../../utils/SliderData'


export default function MyProjects() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
    return (
        <div>
            <Carousel containerClass="container-with-dots"
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}>
          {SliderData.map((card, index) => {
                    return(
                      <Card key={index}>
                      <CardBody>
                        <CardTitle tag="h5">{card.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                      </CardBody>
                      <img width="100%" src={card.image} alt="Card image cap" />
                      <CardBody>
                        <CardText>
                          {card.description}
                        </CardText>
                        <CardLink href={card.github}>GitHub Repo</CardLink>
                        <CardLink href={card.live}>Live Link</CardLink>
                      </CardBody>
                    </Card>
                      )}
                  )} 
          </Carousel>
         
        </div>
    )
}
