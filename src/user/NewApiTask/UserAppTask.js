import React, {useState, useEffect} from 'react'
import Menu from './Nav/Menu'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const UserAppTask = () => {


    const [userlist, setUserlist] = useState([]);
    const [showUserData, setShowUserData] = useState({});
    const [viewModal, setViewModal] = useState(false);
    //Add modal with Validation//
    const [addModalValidation, setAddModalValidation] = useState(false);


    // const reactUrl = `${process.env.REACT_APP_API_X}/docs/users`

    
    const getData = () =>{
        axios.get("https://dummyjson.com/users").then((response) =>{
            console.log('response-->',response.data.users);
            setUserlist(response.data.users);
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
   

    //Add Modal Validation function//
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setAddModalValidation(true);
      };


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
        <Form noValidate validated={addModalValidation} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        {/* Add modal end */}


      <h1 className="m-4">React User App Using dummyjason Api</h1>{' '}
      <Button variant="warning" onClick={()=>setAddModalValidation(true)}>Add User</Button>{' '}
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
                  <td>{datalist.id}</td>
                  <td>{datalist.firstName} {datalist.lastName}</td>
                  <td>{datalist.maidenName}</td>
                  <th>{datalist.age}</th>
                  <th>{datalist.email}</th>
                  <th>{datalist.phone}</th>
                  <td>
                  <Button variant="primary" onClick={()=>viewData(datalist)}>View</Button>{' '}
                  <Button variant="secondary">Edit</Button>{' '}
                  <Button variant="danger" onClick={()=>deleteData(dataindex)}>Delete</Button>
                  </td>
                </tr>
              </tbody>
            )
        })
      }
     
    </Table>
      {/* <table class="table table-success table-striped">
          <thead>
            <tr>
              <th>Id NO.</th>&nbsp;&nbsp;
              <th>First Name</th>&nbsp;&nbsp;
              <th>Last Name</th>&nbsp;&nbsp;
              <th col="3">Action</th>
            </tr>
          </thead>
          {userlist && userlist.map((datalist, dataindex) => {
            return (
                <tbody key={dataindex}>
                <tr>
                    <td>{dataindex+1}</td>
                    <td>{datalist.firstName}</td>
                    <td>{datalist.lastName}</td>
                    <td>
                        <button>View</button>
                        <button>Change</button>
                        <button>Delete</button>
                    </td>
                </tr>
              </tbody>
            )
          })}
        </table>  */}
    </div>
  )
}

export default UserAppTask
