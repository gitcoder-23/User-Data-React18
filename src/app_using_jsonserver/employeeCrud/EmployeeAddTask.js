import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EmployeeAddTask = () => {
  const navigate = useNavigate();

  const [employeeAdd, setEmployeeAdd] = useState({
    emptaskname: '',
    emptaskemail: '',
    emptaskphone: '',
    emptaskgender: '',
  });
  const [btnValidated, setBtnValidated] = useState(false);
  const [message, setMessage] = useState('');
  const [errStatus, setErrStatus] = useState(false);

  const empSubmit = (event) => {
    event.preventDefault();
    if (
      !employeeAdd.emptaskname ||
      !employeeAdd.emptaskemail ||
      !employeeAdd.emptaskphone ||
      !employeeAdd.emptaskgender
    ) {
      setErrStatus(true);
      setBtnValidated(true);
      setMessage('Input data missing.');
      setTimeout(() => {
        setBtnValidated(false);
        setMessage('');
      }, 2000);
    } else {
      const inputData = {
        id: Date.now(),
        employeename: employeeAdd.emptaskname,
        email: employeeAdd.emptaskemail,
        phone: employeeAdd.emptaskphone,
        gender: employeeAdd.emptaskgender,
      };
      setBtnValidated(false);
      axios
        .post(`${process.env.REACT_APP_JSON_API}/employee`, inputData)
        .then((res) => {
          console.log('res-->', res);
          if (res.status === 201) {
            setErrStatus(false);
            setMessage('Input data registered successfully.');
            setTimeout(() => {
              setMessage('');
              navigate('/employeelist');
            }, 1000);
          }
        })
        .catch((error) => {
          console.log('error-->', error);
          if (error.response.status === 404) {
            setErrStatus(true);
            setMessage('Something went wrong !');
            setTimeout(() => {
              setMessage('');
            }, 2000);
          }
        });
    }

  };

  return (
    <>
      <div className="container my-4">
        <div className="row" style={{ width: '70%', margin: '0 auto' }}>
          <Form onSubmit={empSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={employeeAdd.emptaskname}
                  onChange={(event) =>
                    setEmployeeAdd({
                      ...employeeAdd,
                      emptaskname: event.target.value,
                    })
                  }
                />
                {
                  !employeeAdd.emptaskname && btnValidated === true ? (
                    <span style={{color: 'red'}}>Please add UserName</span>
                  ):(<></>)
                }
                
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={employeeAdd.emptaskemail}
                    onChange={(event) =>
                      setEmployeeAdd({
                        ...employeeAdd,
                        emptaskemail: event.target.value,
                      })
                    }
                    
                  />
                
                </InputGroup>
                {
                  !employeeAdd.emptaskemail && btnValidated === true ? (
                    <span style={{color: 'red'}}>Please add Email</span>
                  ):(<></>)
                }
              </Form.Group>
            </Row>
            <Row className="mb-6">
              <Form.Group as={Col} md="6">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={employeeAdd.emptaskphone}
                  onChange={(event) =>
                    setEmployeeAdd({
                      ...employeeAdd,
                      emptaskphone: event.target.value,
                    })
                  }

                />
                {
                  !employeeAdd.emptaskphone && btnValidated === true ? (
                    <span style={{color: 'red'}}>Please add contact no.</span>
                  ):(<></>)
                }
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={employeeAdd.emptaskgender}
                  onChange={(event) =>
                    setEmployeeAdd({
                      ...employeeAdd,
                      emptaskgender: event.target.value,
                    })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </Form.Select>
                {
                  !employeeAdd.emptaskgender && btnValidated === true ? (
                    <span style={{color: 'red'}}>Please select gender</span>
                  ):(<></>)
                }
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                label="Agree to terms and conditions"
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Submit form
            </Button>
            <div className="col-mb-8">
              {message ? (
                <h2
                  className={
                    errStatus === true ? 'text-danger' : 'text-success'
                  }
                  style={{ fontSize: '15px' }}
                >
                  {message}
                </h2>
              ) : (
                <></>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default EmployeeAddTask;
