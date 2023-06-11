import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmployeeNewDetail = () => {
  const { empid } = useParams();
  const [oneEmployee, setOneEmployee] = useState({});
  console.log('empid-->', empid);

  const getOneEmployee = () => {
    axios
      .get(`http://localhost:3079/employee/${empid}`)
      .then((empRes) => {
        console.log('empRes=>', empRes);
        setOneEmployee(empRes.data);
      })
      .catch((errRes) => {
        console.log('errRes=>', errRes);
      });
  };

  useEffect(() => {
    //componentDidMount
    getOneEmployee();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card row py-4" style={{ textAlign: 'left' }}>
          <div className="card-title">
            <h2>
              <u>Employee Detail</u>
            </h2>
          </div>

          <div className="card-body">
            {' '}
            <div>
              <h2>
                The Employee name: <b>{oneEmployee.employeename}</b>
              </h2>
              <h6>
                Employee Id: <b>{oneEmployee.id}</b>
              </h6>
              <h3>Contact Details</h3>
              <h5>Email: {oneEmployee.email}</h5>
              <h5>Phone: {oneEmployee.phone}</h5>
              <Link className="btn btn-secondary" to="/employeelist">
                Back to Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeNewDetail;
