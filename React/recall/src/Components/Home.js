import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/Home.css";
import Col from "react-bootstrap/Col";
import image from "../Images/RADish.png";

export default function Home(props) {
  return (
    
    <div class="body">
      <div class="video-container ">
  <iframe src="https://www.youtube.com/embed/lTHGAuIcF7g?controls=0&autoplay=1&mute=1&loop=1"></iframe>
</div>

      {/* <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/qM4zMofsI7w?autoplay=1&controls=0&showinfo=0&autohide=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay=1 ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

      {/* <div className="rounded mx-auto d-block">
        <h1>Welcome to Recall RADish</h1>
        <div className="rounded mx-auto d-block">
          <img
            src={image}
            width="1000rem"
            height="1000rem"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            bg="dark"
          />
        </div>
      </div> */}

      {/* <div class={style.cwrapper} >
    <Col className="d-flex">
        <Carousel  className="margin">
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
    </Col>
    </div> */}
    </div>
  );
}
