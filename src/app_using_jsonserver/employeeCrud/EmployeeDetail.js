import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SpinnerComponent from '../../components/SpinnerComponent';

const EmployeeDetail = () => {
  const { eid } = useParams();
  const [singleEmployee, setSingleEmployee] = useState({});
  const [singleEmployeeLoading, setSingleEmployeeLoading] = useState(false);
  console.log('eid-->', eid);

  const getSingleEmployee = () => {
    setSingleEmployeeLoading(true);
    axios
      .get(`${process.env.REACT_APP_JSON_API}/employee/${eid}`)
      .then((sData) => {
        console.log('sData-->', sData);
        setSingleEmployeeLoading(false);
        setSingleEmployee(sData.data);
      })
      .catch((err) => {
        console.log('err-log', err);
      });
  };

  useEffect(() => {
    getSingleEmployee();
  }, [eid]);

  return (
    <div>
      <div className="container">
        <div className="card row py-4" style={{ textAlign: 'left' }}>
          <div className="card-title">
            <h2>
              <u>Employee Detail</u>
            </h2>
          </div>
          {singleEmployeeLoading === true ? (
            <div
              style={{
                margin: 'auto 0px',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <SpinnerComponent />
            </div>
          ) : (
            <div className="card-body">
              {' '}
              <div>
                <h2>
                  The Employee name is : <b>{singleEmployee.employeename}</b>
                </h2>
                <h6>
                  <b>Employee Id: {singleEmployee.id}</b>
                </h6>
                <h3>Contact Details</h3>
                <h5>Email: {singleEmployee.email}</h5>
                <h5>Phone: {singleEmployee.phone}</h5>
                <Link className="btn btn-secondary" to="/employeelist">
                  Back to Listing
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
