import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Menu from './user/NewApiTask/Nav/Menu';
import AllRoutes from './routes';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <Menu />
        </div>
        <AllRoutes />
      </div>
    </>
  );
};

export default App;
