import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />}></Route>

        <Route exact path="/currentEmployees" element={<EmployeeList />}></Route>

        <Route path="*" element={<CreateEmployee />}></Route>

      </Routes>
    </Router>
  
);
