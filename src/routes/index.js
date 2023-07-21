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

function PrivateRoute({ children }) {
  const userData = localStorage.getItem('userlogdata');
  console.log('userData-->', userData);
  return userData !== null ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
}

function PublicRoute({ children }) {
  const userData = localStorage.getItem('userlogdata');

  return userData === null ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
}

const AllRoutes = () => {
  return (
    <>
      <div className="row mb-4">
        <PrivateRoute>
          <Menu />
        </PrivateRoute>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/userapp"
          element={
            <PrivateRoute>
              <UserApp />
            </PrivateRoute>
          }
        />

        <Route
          path="/userapptask"
          element={
            <PrivateRoute>
              <UserAppTask />
            </PrivateRoute>
          }
        />

        {/* Employee CRUD App */}
        <Route
          path="/employeelist"
          element={
            <PrivateRoute>
              <EmployeeList />
            </PrivateRoute>
          }
        />
        <Route
          path="/employeedetail/:eid"
          element={
            <PrivateRoute>
              <EmployeeDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/detail/:empid"
          element={
            <PrivateRoute>
              <EmployeeNewDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/edit/:empeid"
          element={
            <PrivateRoute>
              <EmployeeEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/useredit/:empeid"
          element={
            <PrivateRoute>
              <EmployeeEditTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/add"
          element={
            <PrivateRoute>
              <EmployeeAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/addtask"
          element={
            <PrivateRoute>
              <EmployeeAddTask />
            </PrivateRoute>
          }
        />

        {/* For Redux */}
        <Route
          path="/redux/emplist"
          element={
            <PrivateRoute>
              <EmpList />
            </PrivateRoute>
          }
        />
        <Route
          path="/redux/empview/:vid"
          element={
            <PrivateRoute>
              <EmpView />
            </PrivateRoute>
          }
        />
        <Route
          path="/redux/empadd"
          element={
            <PrivateRoute>
              <EmpAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/redux/empedit/:edid"
          element={
            <PrivateRoute>
              <EmpEdit />
            </PrivateRoute>
          }
        />

        {/* For Authentication */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
