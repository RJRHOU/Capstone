
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
import myLogo from "../Images/NEWRAD.png";




 









export default function Recall(props){

  const [isLoading, setIsLoading] = useState(true);

  const [reviewtitle, setreviewTitle] = useState("")
  const [userID, setuserID] = useState("")
  const [productID, setproductID] = useState("")
  const [productreview, setPoster] = useState("")


  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsLoading(false), 1000);

   // setIsLoading(false)
  }

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

const createPost = (e) => {

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
}


function handlereviewTitle(e) {
  setreviewTitle(e.target.value)
}
function handleproductID(e) {
  setproductID(e.target.value)
}
function handleuserID(e) {
  setuserID(e.target.value)
}
function handlereviewComment(e) {
  setPoster(e.target.value)
}









  useEffect(() => {
    loadItems();
  }, [props.searchValue]);

  return (
    <>
    <div>
      <img
        alt="ad-img"
        width={500}
        src={myLogo}
        style={{ display: isLoading ? "block" : "none" }}
      />
    
      



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
                  className=""
                  variant="top"
                  src={product.Images[0]?.URL}
                />

                <Card.Body>
                  <Card.Title>{product.Title}</Card.Title>

                  
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
                </Card.Body>
                </div>
                

                

              

                <div className="d-flex align-items-end">
                <Card.Body>
                  <div className="d-flex align-items-end" >
                  <Container>
                  

                  <Form.Control as="textarea" rows={3} />
                    
                  </Container>
                  </div>
                  <div className="text-center ">
                  <Button onSubmit={ (e) => createPost(e)} variant="primary" size="sm">
          Submit
        </Button>
        </div>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
    </div>
    </>
  );
};

