import React from 'react'
import { Badge, Button, Card, ListGroup, Modal } from 'react-bootstrap'

const ViewTaskModal = ({viewModal,setViewModal,showUserData}) => {

    

  return (
    <>
        <Modal show={viewModal} onHide={()=> setViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '100%' }}>
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
    </>
  )
}

export default ViewTaskModal
