import { Link } from 'react-router-dom'
import '../styles/header.css';

function Header() {

    return <div className='header'>
                <h1 className='titleH1'>HRnet</h1>
                <nav className='navigation'>
                    <Link to="/currentEmployees" className='linkCurrent'>View Current Employees</Link>
                </nav>
           </div>       
}

export default Header