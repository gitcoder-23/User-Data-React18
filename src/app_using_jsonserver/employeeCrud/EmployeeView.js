import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const EmployeeView = ({showModal,setShowModal,viewEmployee}) => {
  return (
    <div>
    <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{viewEmployee.employeename}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{viewEmployee.phone}</Card.Subtitle>
        <Card.Text>
        {viewEmployee.email}
        </Card.Text>
      </Card.Body>
    </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default EmployeeView;
