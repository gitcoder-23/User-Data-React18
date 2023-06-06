import React, {useState, useEffect} from 'react'
import Menu from './Nav/Menu'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


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

    
    const getData = () =>{
      setDataLoading(true);
        axios.get("https://dummyjson.com/users").then((response) =>{
            // console.log('response-->',response.data.users);
            setDataLoading(true);
            if (response.status === 200){
            setUserlist(response.data.users);
            setDataLoading(false);
            }
        })
        .catch((errorData) =>{
            console.log(errorData);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

    const viewData =(showData)=>{
        console.log('showData-->',showData);
        setShowUserData(showData);
        setViewModal(true);
    }

    const deleteData =(del)=>{
        console.log('del-->',del);
        if(window.confirm('Do You want to delete user?')) {
            const delUser = [...userlist].filter((deleteData,deleteIndex)=>deleteIndex!==del);
            setUserlist(delUser);
        }
    
    }

    const editData = (eData)=>{
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
    }

    const editSaveData = ()=>{
      // console.log('editSaveData',editUserFirstName,editUserLastName,editMaidenName,editUserAge,editUserEmail,editUserPhone);
      const inputData = [...userlist].map((userValue, userIndex)=>{
        // console.log(' userValue.firstName-->', userValue.firstName);
        if(userValue.id === editUserId){
          userValue.firstName = editUserFirstName;
          userValue.lastName = editUserLastName;
          userValue.maidenName = editMaidenName;
          userValue.age = editUserAge;
          userValue.email = editUserEmail;
          userValue.phone = editUserPhone;
        }
        return userValue;
      })
      // console.log('inputData-->',inputData);

      setUserlist(inputData);
      
      setEditUserModal(false);
    }
   

    //Add Modal //
    const handleClose = () => setAddModal(false);
    const editClose = () => setEditUserModal(false);




    const saveUserData = () =>{
      // console.log('saveUserData message');
      if (!userFirstName || ! userLastName|| !maidenName || !userAge || !userEmail || !userPhone) {
        setShowSuccess(false);
        setShowMessage('Empty Field !')
        setTimeout(()=>{
          setShowMessage('');
        }, 2000);
      }else{
        const userNewValue = {
          id : Date.now(),
          firstName : userFirstName,
          lastName : userLastName,
          maidenName : maidenName,
          age :userAge,
          email:userEmail,
          phone : userPhone,
        };
        // console.log('userUpdateValue-->',userUpdateValue);
        setUserlist([...userlist, userNewValue]);
        setShowSuccess(true);
        setShowMessage('Create Successfull !');
        setTimeout(()=>{
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
    }
    

    // console.log('userlist-->',userlist);

  return (
    <div>
        <Menu/>
        {/* view modal start */}
        <Modal show={viewModal} onHide={()=> setViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item><h4><Badge bg="secondary">User Name :</Badge></h4>{showUserData.firstName} {showUserData.lastName}</ListGroup.Item>
        <ListGroup.Item><h4><Badge bg="secondary">User Maiden Name :</Badge></h4>{showUserData.maidenName}</ListGroup.Item>
        <ListGroup.Item><h4><Badge bg="secondary">User Age :</Badge></h4>{showUserData.age}</ListGroup.Item>
        <ListGroup.Item><h4><Badge bg="secondary">User Email :</Badge></h4>{showUserData.email}</ListGroup.Item>
        <ListGroup.Item><h4><Badge bg="secondary">User Phone :</Badge></h4>{showUserData.phone}</ListGroup.Item>
      </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        {/* view modal end */}
        {/* Add modal start */}
        <Modal show={addModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group md="4">
            <Form.Label>User First Name</Form.Label>
            <Form.Control
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              defaultValue=""
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              defaultValue=""
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Maiden Name</Form.Label>
            <Form.Control
              type="text"
              name="maidenName"
              id="maidenName"
              placeholder="Maiden Name"
              defaultValue=""
              onChange={(e) => setMaidenName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="userAge"
              id="userAge"
              placeholder="Age"
              defaultValue=""
              onChange={(e) => setUserAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                name="userEmail"
                id="userEmail"
                defaultValue=""
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="userPhone"
              id="userPhone"
              placeholder="Phone Number"
              defaultValue=""
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          {showMessage? (
            <h4 style={{color : showSuccess === true ? 'green' :'red'}}>
              {showMessage}
            </h4>
          ): (<></>)}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUserData}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
        {/* Add modal end */}
        {/* Edit Modal Start */}
        <Modal show={editUserModal} onHide={()=>setEditUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Edit Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group md="4">
            <Form.Label>User First Name</Form.Label>
            <Form.Control
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              defaultValue={editUserFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              defaultValue={editUserLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Maiden Name</Form.Label>
            <Form.Control
              type="text"
              name="maidenName"
              id="maidenName"
              placeholder="Maiden Name"
              defaultValue={editMaidenName}
              onChange={(e) => setMaidenName(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="userAge"
              id="userAge"
              placeholder="Age"
              defaultValue={editUserAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                name="userEmail"
                id="userEmail"
                defaultValue={editUserEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="userPhone"
              id="userPhone"
              placeholder="Phone Number"
              defaultValue={editUserPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editSaveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        {/* Edit Modal End */}



      <h1 className="m-4">React User App Using dummyjason Api</h1>{' '}

      {dadaLoading === true ? (<h2 style={{color:'brown', fontSize:'20px'}}>Data is Loading !...</h2>) 
      : userlist.length === 0 ? 
      (<h2 style={{color:'grey', fontSize:'20px'}}>No Data ! </h2>) 
      : (
        <>
        <Button variant="warning" onClick={()=>setAddModal(true)}>Add User</Button>{' '}
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
  {
    userlist && userlist.map((datalist, dataindex) =>{
        return (
            <tbody>
            <tr>
              <td>{dataindex+1}</td>
              <td>{datalist.firstName} {datalist.lastName}</td>
              <td>{datalist.maidenName}</td>
              <th>{datalist.age}</th>
              <th>{datalist.email}</th>
              <th>{datalist.phone}</th>
              <td>
              <Button variant="primary" onClick={()=>viewData(datalist)}>View</Button>{' '}
              <Button variant="secondary" onClick={()=>editData(datalist)}>Edit</Button>{' '}
              <Button variant="danger" onClick={()=>deleteData(dataindex)}>Delete</Button>
              </td>
            </tr>
          </tbody>
        )
    })
  }
 
        </Table>
        </>
      
      )}
     
    </div>
  )
}

export default UserAppTask
