import React from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const EditModalPopup = ({
  editModal,
  setEditModal,
  editUserName,
  setEditUserName,
  editUserEmail,
  setEditUserEmail,
  editUserPhone,
  setEditUserPhone,
  saveEdit,
}) => {
  return (
    <>
      <Modal show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group md="4">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                id="userName"
                placeholder="User Name"
                defaultValue={editUserName}
                onChange={(e) => setEditUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group md="4">
              <Form.Label>User Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="userEmail"
                  id="userEmail"
                  placeholder="User Email"
                  defaultValue={editUserEmail}
                  onChange={(e) => setEditUserEmail(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group md="4">
              <Form.Label>User Phone</Form.Label>
              <Form.Control
                type="text"
                name="userPhone"
                id="userPhone"
                placeholder="User Phone"
                defaultValue={editUserPhone}
                onChange={(e) => setEditUserPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModalPopup;
