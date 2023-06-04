import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserApp from "./user/UserApp";
import UserAppTask from "./user/NewApiTask/UserAppTask";
import Home from "./user/NewApiTask/Home";

const App = () => {


  return (
    <>
    <div className="App" >
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/userapp" element={<UserApp />} />
      <Route exact path="/userapptask" element={<UserAppTask />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
