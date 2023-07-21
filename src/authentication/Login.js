import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../crud_redux/redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';
import { resetInterceptor } from '../UserRootApi';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userFormState, setUserFormState] = useState({
    username: '',
    useremail: '',
    userpassword: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const loginSubmit = (evt) => {
    evt.preventDefault();
    if (
      !userFormState.username ||
      !userFormState.useremail ||
      !userFormState.userpassword
    ) {
      setMessage('Please fill all the fields');
      setError(true);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } else {
      const formFieldData = {
        username: userFormState.username,
        email: userFormState.useremail,
        password: userFormState.userpassword,
      };
      const userData = {
        user: formFieldData,
      };
      console.log('userData-->', userData);
      dispatch(userRegister(userData)).then((resp) => {
        console.log(resp);
        if (resp?.meta?.requestStatus === 'fulfilled') {
          const userloggedData = resp?.payload?.user;
          localStorage.setItem('userlogdata', JSON.stringify(userloggedData));
          setUserFormState({
            username: '',
            useremail: '',
            userpassword: '',
          });
          setMessage('Employee added success!');
          setError(false);
          window.location.reload();
          const userData = localStorage.getItem('userlogdata');

          if (userData) {
            const userToken = JSON.parse(userData).token;
            console.log('userToken-->', userToken);
            if (userToken) {
              resetInterceptor(userToken);
            }
          }
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ width: '60%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>User Registration </h2>
        <Form onSubmit={loginSubmit}>
          <div className="mb-4">
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={userFormState.username}
                onChange={(e) =>
                  setUserFormState({
                    ...userFormState,
                    username: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="User email"
                  name="useremail"
                  id="useremail"
                  value={userFormState.useremail}
                  onChange={(e) =>
                    setUserFormState({
                      ...userFormState,
                      useremail: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userFormState.userpassword}
                onChange={(e) =>
                  setUserFormState({
                    ...userFormState,
                    userpassword: e.target.value,
                  })
                }
              />
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>{' '}
            </div>

            <div className="col-md-8">
              {message ? (
                <h2
                  className={error === true ? 'text-danger' : 'text-success'}
                  style={{ fontSize: '20px', margin: '5px' }}
                >
                  {message}
                </h2>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
