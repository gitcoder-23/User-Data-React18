import React from 'react'
import { Button } from 'react-bootstrap';

const UserListTask = (props) => {
    const{dataindex,datalist,viewData,editData,deleteData}= props;
  return (
    <>
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
      
    </>
  )
}

export default UserListTask
