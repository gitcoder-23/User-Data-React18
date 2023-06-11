import React, { useState } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import ButtonComp from '../../components/ButtonComp';

const CreateModalPopup = ({
  createModal,
  handleCreateClose,
  udetails,
  setUdetails,
}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // console.log('userName-->', userName);

  const saveUser = () => {
    console.log('saveUser');
    if (!userName || !userEmail || !userPhone) {
      setSuccess(false);
      setMessage('Please fill all fields!');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    } else {
      const newFormValue = {
        id: Date.now(),
        name: userName,
        email: userEmail,
        phone: userPhone,
      };
      console.log('newFormValue-->', newFormValue);
      setUdetails([...udetails, newFormValue]);
      setSuccess(true);
      setMessage('User created!');
      setTimeout(() => {
        setMessage('');
        setUserName('');
        setUserEmail('');
        setUserPhone('');
        handleCreateClose();
      }, 2000);
    }
  };

  // console.log('udetails-->', udetails);
  return (
    <Modal show={createModal} onHide={handleCreateClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group md="4">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              id="userName"
              placeholder="User name"
              defaultValue=""
              onChange={(e) => setUserName(e.target.value)}
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
        {message ? (
          <h2
            style={{
              color: success === true ? 'green' : 'red',
              fontSize: '18px',
            }}
          >
            {message}
          </h2>
        ) : (
          <></>
        )}
        <ButtonComp
          variant="secondary"
          buttonName="Close Window"
          onClickButton={handleCreateClose}
        />
        {/* <Button variant="secondary" onClick={handleCreateClose}>
          Close
        </Button> */}
        <Button variant="primary" onClick={saveUser}>
          Save User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModalPopup;
