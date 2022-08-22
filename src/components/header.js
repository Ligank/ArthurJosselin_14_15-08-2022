import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/header.css';

function Header() {

    return <div className='header'>
                <Link to='/' className='logo'>
                    <img className="logo-image" src={logo} alt="HRnet Logo"/>
                </Link>
                <h1 className='titleH1'>HRnet</h1>
                <nav className='navigation'>
                    <Link to="/currentEmployees" className='linkCurrent'>View Current Employees</Link>
                </nav>
           </div>       
}

export default Header