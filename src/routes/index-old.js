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
        <Route
          path="/"
          element={
            <PrivateRoute auth={authState}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/userapp"
          element={
            <PrivateRoute auth={authState}>
              <UserApp />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/userapptask"
          element={
            <PrivateRoute auth={authState}>
              <UserAppTask />
            </PrivateRoute>
          }
        />

        {/* Employee CRUD App */}
        <Route
          exact
          path="/employeelist"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employeedetail/:eid"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employee/detail/:empid"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeNewDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employee/edit/:empeid"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeEdit />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employee/useredit/:empeid"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeEditTask />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employee/add"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeAdd />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employee/addtask"
          element={
            <PrivateRoute auth={authState}>
              <EmployeeAddTask />
            </PrivateRoute>
          }
        />

        {/* For Redux */}
        <Route
          exact
          path="/redux/emplist"
          element={
            <PrivateRoute auth={authState}>
              <EmpList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/redux/empview/:vid"
          element={
            <PrivateRoute auth={authState}>
              <EmpView />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/redux/empadd"
          element={
            <PrivateRoute auth={authState}>
              <EmpAdd />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/redux/empedit/:edid"
          element={
            <PrivateRoute auth={authState}>
              <EmpEdit />
            </PrivateRoute>
          }
        />

        {/* For Authentication */}
        <Route
          exact
          path="/login"
          element={
            <PublicRoute auth={authState}>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
