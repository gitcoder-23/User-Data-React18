import React from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from 'react-bootstrap';

const EmployeeEditTask = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ margin: '0 auto 0', width: '70%' }}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Contact</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>{' '}
            <Button variant="secondary" type="submit">
              Back to Userlist
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EmployeeEditTask;
