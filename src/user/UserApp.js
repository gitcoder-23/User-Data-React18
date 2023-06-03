import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import ViewModalPopup from './modalPopups/ViewModalPopup';
import UserList from './modalPopups/UserList';

const UserApp = () => {
  const apiData = `${process.env.REACT_APP_API}/users`;

  const [udetails, setUdetails] = useState([]);
  const [showData, setShowData] = useState({});
  const [isloading, setIsLoading] = useState(false);
  // For modal popup
  const [viewModal, setViewModal] = useState(false);

  const handleClose = () => setViewModal(false);

  // const apiData = "https://jsonplaceholder.typicode.com/users";

  const getUser = () => {
    setIsLoading(true);
    axios
      .get(apiData)
      .then((response) => {
        console.log('Response-->', response);
        setIsLoading(true);
        if (response.status === 200) {
          setUdetails(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log('error-->', error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const viewData = (showData) => {
    setShowData(showData);
    setViewModal(true);
  };
  const deldata = (del) => {
    console.log('del-->', del);
    if (window.confirm('Confirm Delete?')) {
      const delphoto = [...udetails].filter((dData, dIndex) => dIndex !== del);
      setUdetails(delphoto);
    }
  };

  // console.log('udetails-->',udetails);
  return (
    <div>
      <h1 className="m-4">React User App Using jsonplaceholder Api</h1>{' '}
      <Button variant="success">Add new</Button>
      {/* View Modal Popup Start */}
      <ViewModalPopup
        viewModal={viewModal}
        handleClose={handleClose}
        showData={showData}
      />
      {/* View Modal Popup End */}
      {isloading === true ? (
        <h2 style={{ color: 'grey' }}>Loading Please Wait...!!</h2>
      ) : udetails.length === 0 ? (
        <h2>No User Detail Found !</h2>
      ) : (
        <table style={{ margin: '0 auto' }}>
          <thead style={{ color: 'brown' }}>
            <tr>
              <th>Sl. NO.</th>&nbsp;&nbsp;
              <th>Name</th>&nbsp;&nbsp;
              <th>Email</th>&nbsp;&nbsp;
              <th>Phone no.</th>&nbsp;&nbsp;
              <th col="3">Action</th>
            </tr>
          </thead>
          {udetails &&
            udetails.map((userData, userindex) => {
              return (
                <>
                  <UserList
                    key={userindex}
                    userData={userData}
                    viewData={viewData}
                    deldata={deldata}
                    userindex={userindex}
                  />
                </>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default UserApp;
