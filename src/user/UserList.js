import React from 'react';

const UserList = ({ userData, viewData, deldata, userindex }) => {
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
            <button
              className="btn btn-primary"
              onClick={() => viewData(userData)}
            >
              Show
            </button>
            &nbsp;
            <button style={{ borderWidth: '1px', borderRadius: '5px' }}>
              Modify
            </button>
            &nbsp;
            <button
              style={{
                color: 'red',
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
