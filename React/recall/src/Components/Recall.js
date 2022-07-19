import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./Redux/action";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Recall = (props) => {
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

  useEffect(() => {
    loadItems();
  }, [props.searchValue]);

  return (
    <div>
      <Row lg={4}>
        {!!items.length &&
          items.map((product) => (
            <Col className="d-flex">
              <Card
                className="flex-fill"
                key={product.RecallID}
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={product.Images[0]?.URL} />

                <Card.Body>
                  <Card.Title>{product.Title}</Card.Title>
                  <Card.Text>{product.Description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product.RecallDate}</ListGroupItem>
                  <ListGroupItem>{product.Retailers[0]?.Name}</ListGroupItem>
                  <ListGroupItem></ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Recall;
