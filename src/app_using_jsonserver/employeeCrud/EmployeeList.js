import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import EmployeeView from './EmployeeView';
import { useNavigate } from 'react-router-dom';
import SpinnerComponent from '../../components/SpinnerComponent';

const EmployeeList = () => {
  const [employeeDatas, setEmployeeDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  // view modal useState
  const [viewEmployee, setViewEmployee] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const getEmployees = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_JSON_API}/employee`)
      .then((res) => {
        console.log('res-->', res);
        if (res.status === 200) {
          setLoading(false);
          if (res.data.length === 0) {
            setMessage('No data found!');
          } else {
            setEmployeeDatas(res.data);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log('err->', err);
        if (err.response.status === 404) {
          setMessage('Something went wrong!');
        }
      });
  };
  const viewData = (showEmpl) => {
    console.log('hi');
    setViewEmployee(showEmpl);
    setShowModal(true);
  };

  useEffect(() => {
    // componentDidMount
    getEmployees();
  }, []);

  const viewDetailPage = (empData) => {
    // console.log('viewDetailPage-->', empData);
    navigate(`/employeedetail/${empData.id}`);
  };

  return (
    <div className="container">
      {/* View Button start*/}
      <EmployeeView
        viewEmployee={viewEmployee}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      {/* View Button end*/}
      {loading === true ? (
        <div
          style={{
            margin: 'auto 0px',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <SpinnerComponent />
        </div>
      ) : message ? (
        <h2>{message}</h2>
      ) : (
        <>
          <Table striped="columns">
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            {employeeDatas &&
              (employeeDatas || []).map((eData, index) => {
                return (
                  <tbody key={eData.id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{eData.employeename}</td>
                      <th>{eData.email}</th>
                      <th>{eData.phone}</th>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => viewDetailPage(eData)}
                        >
                          View Page
                        </Button>{' '}
                        <Button
                          variant="primary"
                          onClick={() => viewData(eData)}
                        >
                          View Modal
                        </Button>{' '}
                        <Button variant="secondary">Edit</Button>{' '}
                        <Button variant="danger">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </Table>
        </>
      )}
    </div>
  );
};

export default EmployeeList;
