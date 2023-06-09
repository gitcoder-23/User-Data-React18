import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import EmployeeView from './EmployeeView';

const EmployeeList = () => {
  const [employeeDatas, setEmployeeDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  // view modal useState
  const [viewEmployee, setViewEmployee] = useState({});
  const [showModal,setShowModal] = useState(false);

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
  const viewData = (showEmpl)=>{
    console.log('hi');
    setViewEmployee(showEmpl);
    setShowModal(true);
  }

  useEffect(() => {
    // componentDidMount
    getEmployees();
  }, []);

  console.log('employeeDatas-->', employeeDatas);

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
       <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
     </Spinner>
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
                        <Button variant="primary" onClick={()=>viewData(eData)}>View</Button>{' '}
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
