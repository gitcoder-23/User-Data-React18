import React from 'react';

const UserList = (props) => {
  const { userData, viewData, deldata, userindex, editClick } = props;
  return (
    <>
      <tbody key={userindex}>
        <tr>
          <td style={{ backgroundColor: 'brown', color: 'white' }}>
            {userindex + 1}
          </td>
          &nbsp;&nbsp;
          <td style={{ backgroundColor: 'green', color: 'white' }}>
            {userData.name}
          </td>
          &nbsp;&nbsp;
          <td style={{ backgroundColor: 'green', color: 'white' }}>
            {userData.email}
          </td>
          &nbsp;&nbsp;
          <td style={{ backgroundColor: 'green', color: 'white' }}>
            {userData.phone}
          </td>
          &nbsp;&nbsp;
          <td>
            <button className="btn btn-info" onClick={() => viewData(userData)}>
              Show
            </button>
            &nbsp;
            <button
              className="btn btn-warning"
              style={{ borderWidth: '1px', borderRadius: '5px' }}
              onClick={() => editClick(userData)}
            >
              Modify
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              style={{
                color: '#fff',
                borderWidth: '1px',
                borderRadius: '5px',
              }}
              onClick={() => deldata(userindex)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserList;
