import { Link } from 'react-router-dom'
import '../styles/EmployeeList.css';

function EmployeeList() {
    return (
      <div className="CurrentEmployees">
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/" className='linkHome'>Home</Link>
        </div>
      </div>
    );
  }
  
  export default EmployeeList;