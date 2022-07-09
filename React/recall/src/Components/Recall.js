import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadProducts } from './Redux/action';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

const Products = () => {
  const dispatch = useDispatch();


  const items = useSelector(state => state.recalls.products);
  const testImg = items[0]

    
    const loadItems = async () => {
        const apiData = await fetch('https://www.saferproducts.gov/RestWebServices/Recall?Format=Json&RecallTitle=food')
        const jsonData = await apiData.json()
        loadProducts(dispatch, jsonData)
        
        console.log(jsonData)
        console.log(jsonData[0].Images[0].URL)
    };


    useEffect(() => {
      loadItems()
    }, [])


  return (
    <div>
      {!!items.length && items.map((product) =>(
        <Card key={product.RecallID} style={{ width: '18rem' }}>
        <Card.Img  variant="top" src=""  />   
        
        {/* {product.Images[0].URL} */}
        
        <Card.Body>
          <Card.Title >{product.Title}</Card.Title>
          <Card.Text>
            {product.Description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{product.RecallDate}</ListGroupItem>
          <ListGroupItem>{product.Retailers[0].Name}</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
        
      ))}



        
    </div>
  );
};

export default Products;