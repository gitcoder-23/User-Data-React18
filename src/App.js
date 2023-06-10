import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import UserApp from './user/UserApp';
import UserAppTask from './user/NewApiTask/UserAppTask';
import Home from './user/NewApiTask/Home';
import EmployeeList from './app_using_jsonserver/employeeCrud/EmployeeList';
import Menu from './user/NewApiTask/Nav/Menu';
import EmployeeDetail from './app_using_jsonserver/employeeCrud/EmployeeDetail';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <Menu />
        </div>
        <Routes>
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
        </Routes>
      </div>
    </>
  );
};

export default App;
