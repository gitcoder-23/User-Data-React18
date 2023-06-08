import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'

const AddTaskModal = ({addModal, setAddModal,setUserFirstName,
    setUserLastName,setMaidenName,setUserAge,setUserEmail,setUserPhone,showMessage,showSuccess,saveUserData}) => {
  return (
    <>
       <Modal show={addModal} onHide={()=>setAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Register</Modal.Title>
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
              defaultValue=""
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              defaultValue=""
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Maiden Name</Form.Label>
            <Form.Control
              type="text"
              name="maidenName"
              id="maidenName"
              placeholder="Maiden Name"
              defaultValue=""
              onChange={(e) => setMaidenName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="userAge"
              id="userAge"
              placeholder="Age"
              defaultValue=""
              onChange={(e) => setUserAge(e.target.value)}
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
                defaultValue=""
                onChange={(e) => setUserEmail(e.target.value)}
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
              defaultValue=""
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          {showMessage? (
            <h4 style={{color : showSuccess === true ? 'green' :'red'}}>
              {showMessage}
            </h4>
          ): (<></>)}
          <Button variant="secondary" onClick={()=>setAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUserData}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddTaskModal
