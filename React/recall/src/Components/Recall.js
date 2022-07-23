
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../Redux/action";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "./css/recall.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import myLogo from "../Images/RADish.png";

export default function Recall(props){
  const userID = useSelector(state => state.userData?.userData?.id) 
  // const [isLoading, setIsLoading] = useState(true);

  const [allreviews, setAllreviews] = useState([])
  const [productreview, setProductReview] = useState("")


  

  const dispatch = useDispatch();

  const items = useSelector((state) => state.recalls.products);
  const testImg = items[0];

  const loadItems = async () => {
    console.log(props.searchValue);
    const apiData = await fetch(
      `https://www.saferproducts.gov/RestWebServices/Recall?Format=Json&RecallDescription=${props.searchValue}`
    );
    const jsonData = await apiData.json();
    loadProducts(dispatch, jsonData);

    console.log(jsonData);
  };


const createPost = (e, productID, reviewtitle) => {

  console.log(productID,
    userID,
    reviewtitle, 
    productreview)

  e.preventDefault()
     fetch(`http://localhost:6700/reviewpost/comment`, {


      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

    productID,
    userID,
    reviewtitle, 
    productreview,
    
      }),

})
getreviews()

}


const getreviews = () => {

  

 
     fetch(`http://localhost:6700/reviewpost/allreviews`, {


      method: "GET"
      
    
      })

      .then(res => res.json())
      .then(data => {
          setAllreviews(data)
       
        
        console.log("data", data)
      })

}





function handlereviewComment(e) {
  setProductReview(e.target.value)
}




useEffect(() => {
  getreviews();
}, []);




  useEffect(() => {
    loadItems();
  }, [props.searchValue]);

  return (
    
    <div  >
      <div  className="image">
      <></>



    <div className="links" class={style.textHeight}>
      <Row lg={6}>
        {!!items.length &&
          items.map((product) => (
            <Col className="d-flex">
              <Card
                className="flex-fill"
                key={product.RecallID}
                style={{ width: "18rem" }}
                class="card h-800"
                
              >
                <Card.Img
                  style={{ height: "20rem" }}
                  className=""
                  variant="top"
                  src={product.Images[0]?.URL}
                />

                <Card.Body>
                  <Card.Title>{<h4>{product.Title}</h4>}</Card.Title>

                  
                  <Card.Text style={{ height: "10rem" }}>
                    {product.Description}
                  </Card.Text>
                  
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroupItem>Recall ID : {product.RecallID}</ListGroupItem>
                  <ListGroupItem>{product.Retailers[0]?.Name}</ListGroupItem>
                  <ListGroupItem>
                    Recall Date: {product.RecallDate}
                  </ListGroupItem>
                </ListGroup>
                <div className="text-center">
                <Card.Body className="links">
                  <Card.Link class={style.links} href={product.URL}>
                    Click For More Information
              
                  </Card.Link>
                  <div>
                    {!!allreviews.length && allreviews.filter(review => review.productID === product.RecallID).map(productreview => (
                      <div>{productreview.productreview}</div>
                    ))}
                  </div>
                </Card.Body>
                </div>
                

                

              
                {!!userID &&
                <div className="d-flex align-items-end">
                <Card.Body className="links">
                  <div className="d-flex align-items-end">
                  <Container>
                  

                  <Form.Control as="textarea" rows={3} onChange={(e) => handlereviewComment(e)} />
                  <div className="text-center ">
                  <Button onClick={ (e) => createPost(e, product.RecallID, product.Title )} variant="primary" size="sm">
          Submit
        </Button>
        </div>
                  </Container>
                  </div>
                  
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
                </div>}
              </Card>
            </Col>
          ))}
      </Row>
    </div>
    </div>
    </div>
    // </>
  );
};

