import React from 'react';
import { Button, Table } from 'react-bootstrap';

const EmployeeList = () => {
  return (
    <div className="container">
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

        <tbody>
          <tr>
            <td>1</td>
            <td>Tommy</td>
            <th>Tommy@n.com</th>
            <th>9875485747</th>
            <td>
              <Button variant="primary">View</Button>{' '}
              <Button variant="secondary">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
