import { Link } from 'react-router-dom'
import DataTable from '../components/DataTable.js'
import React, { useEffect } from "react";
import {users} from '../data/user'
import {states} from '../data/states'
import { useSelector } from "react-redux"
import { userSelector, clearState } from "../redux/UserSlice"
import { useDispatch } from "react-redux"
import '../styles/EmployeeList.css';

function EmployeeList() {

  const dispatch = useDispatch();
  const { firstName, lastName, birth, startDate, street, city, state, zipCode, department } = useSelector(userSelector);

  let name = state
  let findState = !name ? states : states.filter(state => state.name === name)

  useEffect(() => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate.replace(/-/g, "/"),
      department: department,
      birth: birth.replace(/-/g, "/"),
      street: street,
      city: city,
      state: findState[0].abbreviation,
      zipCode: zipCode
    }
    users.forEach(element => {
      if (element.firstName === user.firstName && element.lastName === user.lastName && element.birth === user.birth && element.startDate === user.startDate) {
        dispatch(clearState())
        user = {
          firstName: '',
        }
      }
    })
    if (user.firstName !== '') {
      let data = users
      data.push(user)
      dispatch(clearState())
    } else {
      dispatch(clearState())
    }
  }, [birth, city, department, dispatch, findState, firstName, lastName, startDate, street, zipCode])

    return (
      <div className="CurrentEmployees">
        <div id="employee-div" className="containerList">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <DataTable data={users} name1= 'First Name' name2='Last Name'  name3='Start Date'  name4='Department' name5='Date of Birth' name6='Street' name7='City' name8='State' name9='Zip Code'>Home</DataTable>
            <Link to="/" className='linkHome'>Home</Link>
        </div>
      </div>
    );
  }
  
  export default EmployeeList;