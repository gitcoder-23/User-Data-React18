import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EmployeeAdd = () => {
  const navigate = useNavigate();
  const [employeeState, setEmployeeState] = useState({
    empName: '',
    empEmail: '',
    empPhone: '',
    empGender: '',
    activeEmp: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [onBtnClick, setOnBtnClick] = useState(false);

  const addEmployee = (evt) => {
    evt.preventDefault();

    if (
      !employeeState.empName ||
      !employeeState.empEmail ||
      !employeeState.empPhone ||
      !employeeState.empGender
    ) {
      setError(true);
      setOnBtnClick(true);
      setMessage('Please fill all the fields');
      setTimeout(() => {
        setMessage('');
        setOnBtnClick(false);
      }, 2000);
    } else {
      const formData = {
        id: Date.now(),
        employeename: employeeState.empName,
        email: employeeState.empEmail,
        phone: employeeState.empPhone,
        gender: employeeState.empGender,
        status: employeeState.activeEmp,
      };
      setOnBtnClick(false);

      axios
        .post(`${process.env.REACT_APP_JSON_API}/employee`, formData)
        .then((aData) => {
          console.log('aData->', aData);
          if (aData.status === 201) {
            setError(false);
            setMessage('Employee added success!');
            setTimeout(() => {
              setEmployeeState({
                empName: '',
                empEmail: '',
                empPhone: '',
                empGender: '',
                activeEmp: false,
              });
              setMessage('');
              navigate('/employeelist');
            }, 1000);
          }
        })
        .catch((err) => {
          console.log('add_err=>', err);
          if (err.response.status === 404) {
            setError(true);
            setMessage('Employee addition failed!');
            setTimeout(() => {
              setMessage('');
            }, 2000);
          }
        });
    }
  };

  console.log('employeeState.activeEmp-->', employeeState.activeEmp);
  return (
    <div className="container">
      <div className="row" style={{ width: '60%', margin: '0 auto' }}>
        <Form onSubmit={addEmployee}>
          <div className="mb-4">
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="employeename"
                id="employeename"
                placeholder="Employee name"
                value={employeeState.empName}
                onChange={(e) =>
                  setEmployeeState({
                    ...employeeState,
                    empName: e.target.value,
                  })
                }
              />
              {employeeState.empName === '' && onBtnClick === true ? (
                <span style={{ color: 'red' }}>Enter employee name</span>
              ) : (
                <></>
              )}
            </Form.Group>
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="useremail"
                  id="useremail"
                  value={employeeState.empEmail}
                  onChange={(e) =>
                    setEmployeeState({
                      ...employeeState,
                      empEmail: e.target.value,
                    })
                  }
                />
              </InputGroup>
              {employeeState.empEmail === '' && onBtnClick === true ? (
                <span style={{ color: 'red' }}>Enter employee Email</span>
              ) : (
                <></>
              )}
            </Form.Group>
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={employeeState.empPhone}
                onChange={(e) =>
                  setEmployeeState({
                    ...employeeState,
                    empPhone: e.target.value,
                  })
                }
              />
              {employeeState.empPhone === '' && onBtnClick === true ? (
                <span style={{ color: 'red' }}>Enter employee contact no.</span>
              ) : (
                <></>
              )}
            </Form.Group>

            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={employeeState.empGender}
                onChange={(e) =>
                  setEmployeeState({
                    ...employeeState,
                    empGender: e.target.value,
                  })
                }
              >
                <option value="">-- Select One --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Form.Select>
              {!employeeState.empGender && onBtnClick === true ? (
                <span style={{ color: 'red' }}>Select gender !</span>
              ) : (
                <></>
              )}
            </Form.Group>

            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox
                  checked={employeeState.activeEmp}
                  onChange={(e) =>
                    setEmployeeState({
                      ...employeeState,
                      activeEmp: e.target.checked,
                    })
                  }
                />{' '}
                <p style={{ margin: '10px' }}>Active Employee</p>
              </InputGroup>
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>{' '}
            </div>
            <div className="col-md-8">
              {message ? (
                <h2
                  className={error === true ? 'text-danger' : 'text-success'}
                  style={{ fontSize: '20px' }}
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

export default EmployeeAdd;
