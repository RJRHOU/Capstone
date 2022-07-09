import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Home(props) {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://motherhoodcommunity.com/wp-content/uploads/2021/10/Everything-You-Need-To-Know-About-The-HappyBABY-Organic-Food-Recall-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.abc4.com/wp-content/uploads/sites/4/2022/05/Untitled-design-2022-05-21T174832.230.png?w=1280"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foodpoisoningnews.com/wp-content/uploads/2022/05/Outbreak-Investigation-of-Hepatitis-A-Virus-Strawberries-May-2022.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}


