import { Link } from 'react-router-dom'
import DataTable from '../components/DataTable.js'
import {users} from '../data/user'
import '../styles/EmployeeList.css';

function EmployeeList() {

    return (
      <div className="CurrentEmployees">
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <DataTable data={users} name1= 'First Name' name2='Last Name'  name3='Start Date'  name4='Department' name5='Date of Birth' name6='Street' name7='City' name8='State' name9='Zip Code'>Home</DataTable>
            <Link to="/" className='linkHome'>Home</Link>
        </div>
      </div>
    );
  }
  
  export default EmployeeList;