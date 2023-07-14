import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnEmployee } from './redux/actions/empAction';

const EmpAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employeeAdd, setEmployeeAdd] = useState({
    empName: '',
    empEmail: '',
    empPhone: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const employeeeAddClick = () => {
    if (
      !employeeAdd.empName ||
      !employeeAdd.empEmail ||
      !employeeAdd.empPhone
    ) {
      setErrMsg('Please fill all the fields!');
      setSuccess(false);
      setTimeout(() => {
        setErrMsg('');
      }, 1000);
    } else {
      const formData = {
        id: Date.now(),
        employeename: employeeAdd.empName,
        email: employeeAdd.empName,
        phone: employeeAdd.empPhone,
      };
      console.log('formData-->', formData);
      dispatch(addAnEmployee(formData))
        .then((response) => {
          console.log('response-->', response);
          if (response?.meta?.requestStatus === 'fulfilled') {
            setSuccess(true);
            setErrMsg('New employee created!');

            setTimeout(() => {
              setEmployeeAdd({
                empName: '',
                empEmail: '',
                empPhone: '',
              });
              setErrMsg('');
              navigate('/redux/emplist');
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // console.log('employeeAdd-field-->', employeeAdd.empName);
  return (
    <div className="container">
      <div className="row" style={{ width: '60%', margin: '0 auto' }}>
        <Form>
          <div className="mb-4">
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="empName"
                id="empName"
                placeholder="Employee name"
                value={employeeAdd.empName}
                onChange={(e) =>
                  setEmployeeAdd({
                    ...employeeAdd,
                    empName: e.target.value,
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
                  placeholder="Email"
                  name="empEmail"
                  id="empEmail"
                  value={employeeAdd.empEmail}
                  onChange={(e) =>
                    setEmployeeAdd({
                      ...employeeAdd,
                      empEmail: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="empPhone"
                id="empPhone"
                placeholder="Phone Number"
                value={employeeAdd.empPhone}
                onChange={(e) =>
                  setEmployeeAdd({
                    ...employeeAdd,
                    empPhone: e.target.value,
                  })
                }
              />
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => employeeeAddClick()}
              >
                Submit
              </Button>{' '}
            </div>
            <div className="col-md-2">
              <Button
                variant="secondary"
                type="button"
                onClick={() => navigate('/redux/emplist')}
              >
                Back
              </Button>{' '}
            </div>
            <div className="col-md-8">
              {errMsg ? (
                <h2
                  className={success === false ? 'text-danger' : 'text-success'}
                  style={{ fontSize: '20px', margin: '5px' }}
                >
                  {errMsg}
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

export default EmpAdd;
