import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/userapp" element={<UserApp />} />
        <Route exact path="/userapptask" element={<UserAppTask />} />

        {/* Employee CRUD App */}
        <Route exact path="/employeelist" element={<EmployeeList />} />
        <Route exact path="/employeedetail/:eid" element={<EmployeeDetail />} />
        <Route
          exact
          path="/employee/detail/:empid"
          element={<EmployeeNewDetail />}
        />
        <Route exact path="/employee/edit/:empeid" element={<EmployeeEdit />} />
        <Route
          exact
          path="/employee/useredit/:empeid"
          element={<EmployeeEditTask />}
        />
        <Route exact path="/employee/add" element={<EmployeeAdd />} />
        <Route exact path="/employee/addtask" element={<EmployeeAddTask />} />

        {/* For Redux */}
        <Route exact path="/redux/emplist" element={<EmpList />} />
        <Route exact path="/redux/empview/:vid" element={<EmpView />} />
        <Route exact path="/redux/empadd" element={<EmpAdd />} />
        <Route exact path="/redux/empedit/:edid" element={<EmpEdit />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
