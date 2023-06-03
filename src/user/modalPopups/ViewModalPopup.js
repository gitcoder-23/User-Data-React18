import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewModalPopup = (props) => {
  const { viewModal, handleClose, showData } = props;
  return (
    <Modal show={viewModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Sl. NO. : {showData.id}</h3>
        <h3>Name : {showData.name}</h3>
        <h3>Email : {showData.email}</h3>
        <h3>Phone no. : {showData.phone}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModalPopup;
