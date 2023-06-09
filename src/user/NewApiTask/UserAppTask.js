import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ViewTaskModal from './taskModal/ViewTaskModal';
import AddTaskModal from './taskModal/AddTaskModal';
import EditTaskModal from './taskModal/EditTaskModal';
import Spinner from 'react-bootstrap/Spinner';

const UserAppTask = () => {
  const [userlist, setUserlist] = useState([]);
  const [showUserData, setShowUserData] = useState({});
  const [dadaLoading, setDataLoading] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  //Add modal //
  const [addModal, setAddModal] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  //Edit Modal//
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserId, setEditUserId] = useState('');
  const [editUserFirstName, setEditUserFirstName] = useState('');
  const [editUserLastName, setEditUserLastName] = useState('');
  const [editMaidenName, setEditMaidenName] = useState('');
  const [editUserAge, setEditUserAge] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [editUserPhone, setEditUserPhone] = useState('');

  // const reactUrl = `${process.env.REACT_APP_API_X}/docs/users`

  const getData = () => {
    setDataLoading(true);
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        // console.log('response-->',response.data.users);
        setDataLoading(true);
        if (response.status === 200) {
          setUserlist(response.data.users);
          setDataLoading(false);
        }
      })
      .catch((errorData) => {
        console.log(errorData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const viewData = (showData) => {
    console.log('showData-->', showData);
    setShowUserData(showData);
    setViewModal(true);
  };

  const deleteData = (del) => {
    console.log('del-->', del);
    if (window.confirm('Do You want to delete user?')) {
      const delUser = [...userlist].filter(
        (deleteData, deleteIndex) => deleteIndex !== del
      );
      setUserlist(delUser);
    }
  };

  const editData = (eData) => {
    // console.log('eData-->',eData);
    setEditUserModal(true);
    // setEditUserId(parseInt(eData.id));
    const editId = parseInt(eData.id);
    // console.log('editId-->',editId);
    setEditUserId(editId);
    setEditUserFirstName(eData.firstName);
    setEditUserLastName(eData.lastName);
    setEditMaidenName(eData.maidenName);
    setEditUserAge(eData.age);
    setEditUserEmail(eData.email);
    setEditUserPhone(eData.phone);
  };

  const editSaveData = () => {
    // console.log('editSaveData',editUserFirstName,editUserLastName,editMaidenName,editUserAge,editUserEmail,editUserPhone);
    const inputData = [...userlist].map((userValue, userIndex) => {
      // console.log(' userValue.firstName-->', userValue.firstName);
      if (userValue.id === editUserId) {
        userValue.firstName = editUserFirstName;
        userValue.lastName = editUserLastName;
        userValue.maidenName = editMaidenName;
        userValue.age = editUserAge;
        userValue.email = editUserEmail;
        userValue.phone = editUserPhone;
      }
      return userValue;
    });
    // console.log('inputData-->',inputData);

    setUserlist(inputData);

    setEditUserModal(false);
  };

  //Add Modal //
  const handleClose = () => setAddModal(false);
  const editClose = () => setEditUserModal(false);

  const saveUserData = () => {
    // console.log('saveUserData message');
    if (
      !userFirstName ||
      !userLastName ||
      !maidenName ||
      !userAge ||
      !userEmail ||
      !userPhone
    ) {
      setShowSuccess(false);
      setShowMessage('Empty Field !');
      setTimeout(() => {
        setShowMessage('');
      }, 2000);
    } else {
      const userNewValue = {
        id: Date.now(),
        firstName: userFirstName,
        lastName: userLastName,
        maidenName: maidenName,
        age: userAge,
        email: userEmail,
        phone: userPhone,
      };
      // console.log('userUpdateValue-->',userUpdateValue);
      setUserlist([...userlist, userNewValue]);
      setShowSuccess(true);
      setShowMessage('Create Successfull !');
      setTimeout(() => {
        setShowMessage('');
        setUserFirstName('');
        setUserLastName('');
        setMaidenName('');
        setUserAge('');
        setUserEmail('');
        setUserPhone('');
        handleClose();
      }, 2000);
    }
  };

  // console.log('userlist-->',userlist);

  return (
    <div>
      {/* view modal start */}
      <ViewTaskModal
        viewModal={viewModal}
        setViewModal={setViewModal}
        showUserData={showUserData}
      />
      {/* view modal end */}
      {/* Add modal start */}
      <AddTaskModal
        addModal={addModal}
        setAddModal={setAddModal}
        setUserFirstName={setUserFirstName}
        setUserLastName={setUserLastName}
        setMaidenName={setMaidenName}
        setUserAge={setUserAge}
        setUserEmail={setUserEmail}
        setUserPhone={setUserPhone}
        showMessage={showMessage}
        showSuccess={showSuccess}
        saveUserData={saveUserData}
      />
      {/* Add modal end */}
      {/* Edit Modal Start */}
      <EditTaskModal
        editUserModal={editUserModal}
        setEditUserModal={setEditUserModal}
        editUserFirstName={editUserFirstName}
        setEditUserFirstName={setEditUserFirstName}
        editUserLastName={editUserLastName}
        setEditUserLastName={setEditUserLastName}
        editMaidenName={editMaidenName}
        setEditMaidenName={setEditMaidenName}
        editUserAge={editUserAge}
        setEditUserAge={setEditUserAge}
        editUserEmail={editUserEmail}
        setEditUserEmail={setEditUserEmail}
        editUserPhone={editUserPhone}
        setEditUserPhone={setEditUserPhone}
        editClose={editClose}
        editSaveData={editSaveData}
      />
      {/* Edit Modal End */}
      <h1 className="m-4">React User App Using dummyjason Api</h1>{' '}
      {dadaLoading === true ? (
        // <h2 style={{color:'brown', fontSize:'20px'}}>Data is Loading !...</h2>
        <Spinner animation="border" variant="secondary" />
      ) : userlist.length === 0 ? (
        <h2 style={{ color: 'grey', fontSize: '20px' }}>No Data ! </h2>
      ) : (
        <>
          <Button variant="warning" onClick={() => setAddModal(true)}>
            Add User
          </Button>{' '}
          <Table striped="columns">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Maiden Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            {userlist &&
              userlist.map((datalist, dataindex) => {
                return (
                  <tbody>
                    <tr>
                      <td>{dataindex + 1}</td>
                      <td>
                        {datalist.firstName} {datalist.lastName}
                      </td>
                      <td>{datalist.maidenName}</td>
                      <th>{datalist.age}</th>
                      <th>{datalist.email}</th>
                      <th>{datalist.phone}</th>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => viewData(datalist)}
                        >
                          View
                        </Button>{' '}
                        <Button
                          variant="secondary"
                          onClick={() => editData(datalist)}
                        >
                          Edit
                        </Button>{' '}
                        <Button
                          variant="danger"
                          onClick={() => deleteData(dataindex)}
                        >
                          Delete
                        </Button>
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

export default UserAppTask;
