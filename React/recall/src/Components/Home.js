import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import style from './css/Home.css'

export default function Home(props) {
  return (
  <div>  
    <div>
      <h5>
        Welcome to Recall RADish
      </h5>
    </div>

    <div class={style.cwrapper} >
        <Carousel >
  <Carousel.Item>
    <img
      
      className="d-block w-40 auto"
      src="https://motherhoodcommunity.com/wp-content/uploads/2021/10/Everything-You-Need-To-Know-About-The-HappyBABY-Organic-Food-Recall-1.png"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-40 auto"
      src="https://www.abc4.com/wp-content/uploads/sites/4/2022/05/Untitled-design-2022-05-21T174832.230.png?w=1280"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-40 auto"
      src="https://www.foodpoisoningnews.com/wp-content/uploads/2022/05/Outbreak-Investigation-of-Hepatitis-A-Virus-Strawberries-May-2022.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    </div>
    </div>
  )
}


