import React from 'react'
import {Form, InputGroup, Modal } from 'react-bootstrap'
import ButtonComp from '../../ButtonComp'

const EditTaskModal = ({
    editUserModal,
    setEditUserModal,
    editUserFirstName,
    setEditUserFirstName,
    editUserLastName,
    setEditUserLastName,
    editMaidenName,setEditMaidenName,
    editUserAge,
    setEditUserAge,
    editUserEmail,
    setEditUserEmail,
    editUserPhone,setEditUserPhone,
    editClose,editSaveData
}) => {
  return (
    <>
      <Modal show={editUserModal} onHide={()=>setEditUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group md="4">
            <Form.Label>User First Name</Form.Label>
            <Form.Control
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              defaultValue={editUserFirstName}
              onChange={(e) => setEditUserFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              defaultValue={editUserLastName}
              onChange={(e) => setEditUserLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Maiden Name</Form.Label>
            <Form.Control
              type="text"
              name="maidenName"
              id="maidenName"
              placeholder="Maiden Name"
              defaultValue={editMaidenName}
              onChange={(e) => setEditMaidenName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="userAge"
              id="userAge"
              placeholder="Age"
              defaultValue={editUserAge}
              onChange={(e) => setEditUserAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                name="userEmail"
                id="userEmail"
                defaultValue={editUserEmail}
                onChange={(e) => setEditUserEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="userPhone"
              id="userPhone"
              placeholder="Phone Number"
              defaultValue={editUserPhone}
              onChange={(e) => setEditUserPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonComp
          variant="secondary"
          buttonName="Close"
          onClickButton={editClose}
          />
          <ButtonComp
          variant="primary"
          buttonName="Save Changes"
          onClickButton={editSaveData}
          />
          {/* <Button variant="primary" onClick={editSaveData}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal> 
    </>
  )
}

export default EditTaskModal
