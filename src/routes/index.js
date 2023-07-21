import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from '../user/NewApiTask/Home';
import UserApp from '../user/UserApp';
import UserAppTask from '../user/NewApiTask/UserAppTask';
import EmployeeList from '../app_using_jsonserver/employeeCrud/EmployeeList';
import EmployeeDetail from '../app_using_jsonserver/employeeCrud/EmployeeDetail';
import EmployeeNewDetail from '../app_using_jsonserver/employeeCrud/EmployeeNewDetail';
import EmployeeEdit from '../app_using_jsonserver/employeeCrud/EmployeeEdit';
import EmployeeEditTask from '../app_using_jsonserver/employeeCrud/EmployeeEditTask';
import EmployeeAdd from '../app_using_jsonserver/employeeCrud/EmployeeAdd';
import EmployeeAddTask from '../app_using_jsonserver/employeeCrud/EmployeeAddTask';
import EmpList from '../crud_redux/EmpList';
import EmpView from '../crud_redux/EmpView';
import EmpAdd from '../crud_redux/EmpAdd';
import EmpEdit from '../crud_redux/EmpEdit';
import Login from '../authentication/Login';
import Menu from '../user/NewApiTask/Nav/Menu';

function PrivateRoute({ children, auth }) {
  return auth === true && <>{children}</>;
}

function PublicRoute({ children, auth }) {
  return auth === false && <>{children}</>;
}

const AllRoutes = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userlogdata');
    if (userData) {
      const userTokenData = JSON.parse(userData).token;
      console.log('userTokenData-->', userTokenData);
      if (userTokenData) {
        setAuthState(true);
      }
    }
  }, []);

  console.log('authState-->', authState);

  return (
    <>
      <div className="row mb-4">{authState === true ? <Menu /> : <></>}</div>

      <Routes>
        {authState === true ? (
          <>
            {' '}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/userapp" element={<UserApp />} />
            <Route exact path="/userapptask" element={<UserAppTask />} />
            {/* Employee CRUD App */}
            <Route exact path="/employeelist" element={<EmployeeList />} />
            <Route
              exact
              path="/employeedetail/:eid"
              element={<EmployeeDetail />}
            />
            <Route
              exact
              path="/employee/detail/:empid"
              element={<EmployeeNewDetail />}
            />
            <Route
              exact
              path="/employee/edit/:empeid"
              element={<EmployeeEdit />}
            />
            <Route
              exact
              path="/employee/useredit/:empeid"
              element={<EmployeeEditTask />}
            />
            <Route exact path="/employee/add" element={<EmployeeAdd />} />
            <Route
              exact
              path="/employee/addtask"
              element={<EmployeeAddTask />}
            />
            {/* For Redux */}
            <Route exact path="/redux/emplist" element={<EmpList />} />
            <Route exact path="/redux/empview/:vid" element={<EmpView />} />
            <Route exact path="/redux/empadd" element={<EmpAdd />} />
            <Route exact path="/redux/empedit/:edid" element={<EmpEdit />} />
          </>
        ) : (
          <>
            {' '}
            <Route exact path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default AllRoutes;
