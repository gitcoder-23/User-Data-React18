import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EmployeeEdit = () => {
  const { empeid } = useParams();
  const navigate = useNavigate();
  // console.log('empeid->', empeid);

  const { state } = useLocation();

  const [employeeEditState, setEmployeeEditState] = useState({
    empName: state?.singleUser.employeename || '',
    empEmail: state?.singleUser.email || '',
    empPhone: state?.singleUser.phone || '',
    // empGender: '',
  });
  const [showMessage, setShowMessage] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {}, [state?.singleUser, empeid]);

  const editEmployee = (e) => {
    e.preventDefault();
    const formData = {
      employeename: employeeEditState.empName,
      email: employeeEditState.empEmail,
      phone: employeeEditState.empPhone,
    };
    axios
      .put(`${process.env.REACT_APP_JSON_API}/employee/${empeid}`, formData)
      .then((eData) => {
        console.log('edit->', eData);
        if (eData.status === 200) {
          setShowError(false)
          setShowMessage('Edited successfully.')
          setTimeout(()=>{
            setShowMessage('')
            navigate('/employeelist');
          },2000);
        }
      })
      .catch((errEdit) => {
        if (errEdit.response.status === 404) {
          setShowError(true);
          setShowMessage('Something went wrong !')
          console.log('errEdit->', errEdit);
          setTimeout(()=>{
            setShowMessage('')
          },2000);
        }
      });
  };

  return (
    <div className="container">
      <div className="row" style={{ width: '60%', margin: '0 auto' }}>
        <Form onSubmit={editEmployee}>
          <div className="mb-4">
            <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="employeename"
                id="employeename"
                placeholder="Employee name"
                value={employeeEditState.empName}
                onChange={(e) =>
                  setEmployeeEditState({
                    ...employeeEditState,
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
                  name="useremail"
                  id="useremail"
                  value={employeeEditState.empEmail}
                  onChange={(e) =>
                    setEmployeeEditState({
                      ...employeeEditState,
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
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={employeeEditState.empPhone}
                onChange={(e) =>
                  setEmployeeEditState({
                    ...employeeEditState,
                    empPhone: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* <Form.Group md="4" style={{ marginBottom: '20px' }}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                // value={employeeState.empGender}
                // onChange={(e) =>
                //   setEmployeeState({
                //     ...employeeState,
                //     empGender: e.target.value,
                //   })
                // }
              >
                <option value="">-- Select One --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Form.Select>
            </Form.Group> */}
          </div>
          <div className="row">
            <div className="col-md-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>{' '}
            </div>
            <div className="col-md-8">
            {showMessage ? (
              <h2
                className={showError === true ? 'text-danger' : 'text-success'}
                style={{ fontSize: '20px' }}
              >
                {showMessage}
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

export default EmployeeEdit;
