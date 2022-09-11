import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import { Provider } from "react-redux";
import history from './redux/history'
import configureStore from "./redux/configureStore";
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />}></Route>

        <Route exact path="/currentEmployees" element={<EmployeeList />}></Route>

        <Route path="*" element={<CreateEmployee />}></Route>

      </Routes>
    </Router>
    </Provider>
  
);
