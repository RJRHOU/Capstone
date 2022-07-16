import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const EntryForm = () => {
  return (
    <div>
      <div>
        <h1>
          If you would like to submit an item for recall consideration, enter
          Information below.
        </h1>
      </div>
      <div> </div>
      
      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>
              {" "}
              <h5>User ID</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter User ID" />
          </Form.Group>
          {/* <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group> */}
          <Form.Group controlId="form.Title">
            <Form.Label>
              <h5>Title</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Product Title" />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label>
              <h5>Product Review/Issues</h5>
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <button>Submit</button>
      </Container>
    </div>
  );
};

export default EntryForm;
