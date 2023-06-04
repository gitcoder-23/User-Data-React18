import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import ViewModalPopup from './modalPopups/ViewModalPopup';
import UserList from './UserList';
import CreateModalPopup from './modalPopups/CreateModalPopup';
import EditModalPopup from './modalPopups/EditModalPopup';

const UserApp = () => {
  const apiData = `${process.env.REACT_APP_API}/users`;

  const [udetails, setUdetails] = useState([]);
  const [showData, setShowData] = useState({});
  const [isloading, setIsLoading] = useState(false);
  // For modal popup
  const [viewModal, setViewModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  // Edit Ops
  const [editId, setEditId] = useState('');
  const [editUserName, setEditUserName] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [editUserPhone, setEditUserPhone] = useState('');

  const handleClose = () => {
    setViewModal(false);
  };
  const handleCreateClose = () => {
    setCreateModal(false);
  };

  const getUser = () => {
    setIsLoading(true);
    axios
      .get(apiData)
      .then((response) => {
        // console.log('Response-->', response);
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
    setViewModal(true);
    setShowData(showData);
  };
  const deldata = (del) => {
    console.log('del-->', del);
    if (window.confirm('Confirm Delete?')) {
      const delphoto = [...udetails].filter((dData, dIndex) => dIndex !== del);
      setUdetails(delphoto);
    }
  };

  const editClick = (edData) => {
    // console.log('editClick-->', edData);
    setEditModal(true);
    const userId = parseInt(edData.id);
    setEditId(userId);
    setEditUserName(edData.name);
    setEditUserEmail(edData.email);
    setEditUserPhone(edData.phone);
  };

  const saveEdit = () => {
    // console.log('saveEdit->', editUserName, editUserEmail, editUserPhone);
    const editDetails = [...udetails].map((eData, indx) => {
      if (eData.id === editId) {
        eData.name = editUserName;
        eData.email = editUserEmail;
        eData.phone = editUserPhone;
      }
      return eData;
    });
    setUdetails(editDetails);

    setEditModal(false);
  };

  console.log('udetails-->', udetails);
  return (
    <div>
      <h1 className="m-4">React User App Using jsonplaceholder Api</h1>{' '}
      <Button variant="success" onClick={() => setCreateModal(true)}>
        Add new
      </Button>
      {/* View Modal Popup Start */}
      <ViewModalPopup
        viewModal={viewModal}
        handleClose={handleClose}
        showData={showData}
      />
      {/* View Modal Popup End */}
      {/* Create Modal Popup */}
      <CreateModalPopup
        createModal={createModal}
        handleCreateClose={handleCreateClose}
        setUdetails={setUdetails}
        udetails={udetails}
      />
      {/* Create Modal Popup End */}
      {/* Edit User Popup */}
      <EditModalPopup
        editModal={editModal}
        setEditModal={setEditModal}
        editUserName={editUserName}
        setEditUserName={setEditUserName}
        editUserEmail={editUserEmail}
        setEditUserEmail={setEditUserEmail}
        editUserPhone={editUserPhone}
        setEditUserPhone={setEditUserPhone}
        saveEdit={saveEdit}
      />
      {/* Edit User Popup End */}
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
            udetails?.map((userData, userindex) => {
              return (
                <>
                  <UserList
                    key={userindex}
                    userData={userData}
                    viewData={viewData}
                    deldata={deldata}
                    userindex={userindex}
                    editClick={editClick}
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
