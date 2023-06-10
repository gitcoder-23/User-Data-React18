import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <div className="container">
    <Card className="text-center">
      <Card.Header>React.js projects and Tutorials</Card.Header>
      <Card.Body>
        <Card.Title>CRUD APPs</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">Basic crud operation using both dummy and real API</Card.Footer>
    </Card>
    </div>
    </>
   
  );
};

export default Home;
