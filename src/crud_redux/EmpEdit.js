import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  addAnEmployee,
  editAnEmployee,
  getSingleEmployee,
} from './redux/actions/empAction';

const EmpEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { edid } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(getSingleEmployee(edid));
  }, [edid]);

  const [employeeEdit, setEmployeeEdit] = useState({
    empName: state?.singleUser?.employeename || '',
    empEmail: state?.singleUser?.email || '',
    empPhone: state?.singleUser?.phone || '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const employeeeEditClick = () => {
    if (
      !employeeEdit.empName ||
      !employeeEdit.empEmail ||
      !employeeEdit.empPhone
    ) {
      setErrMsg('Please fill all the fields!');
      setSuccess(false);
      setTimeout(() => {
        setErrMsg('');
      }, 1000);
    } else {
      const formData = {
        employeename: employeeEdit.empName,
        email: employeeEdit.empEmail,
        phone: employeeEdit.empPhone,
      };
      console.log(formData);
      dispatch(editAnEmployee({ emplId: edid, emplFormData: formData })).then(
        (eResp) => {
          console.log('eResp->', eResp);
          if (eResp?.meta?.requestStatus === 'fulfilled') {
            setSuccess(true);
            setErrMsg('Single employee modified!');

            setTimeout(() => {
              setErrMsg('');
              navigate('/redux/emplist');
            }, 1000);
          }
        }
      );
    }
  };

  // console.log('employeeEdit-field-->', employeeEdit.empName);
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
                value={employeeEdit?.empName}
                onChange={(e) =>
                  setEmployeeEdit({
                    ...employeeEdit,
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
                  value={employeeEdit?.empEmail}
                  onChange={(e) =>
                    setEmployeeEdit({
                      ...employeeEdit,
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
                value={employeeEdit?.empPhone}
                onChange={(e) =>
                  setEmployeeEdit({
                    ...employeeEdit,
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
                onClick={() => employeeeEditClick()}
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

export default EmpEdit;
