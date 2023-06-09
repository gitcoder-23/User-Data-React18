import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const EmployeeList = () => {
  const [employeeDatas, setEmployeeDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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

  useEffect(() => {
    // componentDidMount
    getEmployees();
  }, []);

  console.log('employeeDatas-->', employeeDatas);

  return (
    <div className="container">
      {loading === true ? (
        <h1>Loading...</h1>
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
                        <Button variant="primary">View</Button>{' '}
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
