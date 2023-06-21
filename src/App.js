import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import UserApp from './user/UserApp';
import UserAppTask from './user/NewApiTask/UserAppTask';
import Home from './user/NewApiTask/Home';
import EmployeeList from './app_using_jsonserver/employeeCrud/EmployeeList';
import Menu from './user/NewApiTask/Nav/Menu';
import EmployeeDetail from './app_using_jsonserver/employeeCrud/EmployeeDetail';
import EmployeeNewDetail from './app_using_jsonserver/employeeCrud/EmployeeNewDetail';
import EmployeeAdd from './app_using_jsonserver/employeeCrud/EmployeeAdd';
import EmployeeAddTask from './app_using_jsonserver/employeeCrud/EmployeeAddTask';
import EmployeeEdit from './app_using_jsonserver/employeeCrud/EmployeeEdit';
import EmployeeEditTask from './app_using_jsonserver/employeeCrud/EmployeeEditTask';

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
          <Route exact path="/employee/addtask" element={<EmployeeAddTask />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
