import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent';
import { Link, useParams } from 'react-router-dom';
import { getSingleEmployee } from './redux/actions/empAction';

const EmpView = () => {
  const dispatch = useDispatch();
  const { vid } = useParams();
  const { singleEmployeeData, isLoading, isMessage } = useSelector(
    (state) => state.employee
  );

  useEffect(() => {
    dispatch(getSingleEmployee(vid));
  }, [vid]);

  console.log('singleEmployeeData->', singleEmployeeData);

  return (
    <div>
      <div className="container">
        <div className="card row py-4" style={{ textAlign: 'left' }}>
          <div className="card-title">
            <h2>
              <u>Employee Detail</u>
            </h2>
          </div>
          {isLoading === true ? (
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
                  The Employee name is :{' '}
                  <b>{singleEmployeeData.employeename}</b>
                </h2>
                <h6>
                  <b>Employee Id: {singleEmployeeData.id}</b>
                </h6>
                <h3>Contact Details</h3>
                <h5>Email: {singleEmployeeData.email}</h5>
                <h5>Phone: {singleEmployeeData.phone}</h5>
                <Link className="btn btn-secondary" to="/redux/emplist">
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

export default EmpView;
