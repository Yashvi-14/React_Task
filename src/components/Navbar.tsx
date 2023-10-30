import { Link } from 'react-router-dom'; 
import {useState} from 'react';
import './Sidebar.css'
const Navbar = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <Link className="navbar-brand" to="/">FilterData</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navb" className="navbar-collapse collapse hide">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Country">Country</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/State">State</Link>
          </li> */}
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Logout"><span className="fas fa-sign-in-alt"></span> Logout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/"><span className="fas fa-user"></span> Login</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Login"><span className="fas fa-sign-in-alt"></span> {profile}</Link>
          </li> */}
        </ul>
      </div>
    </nav>
{/*    
    <div className="sidebar"  >
      <ul className='list'>
        <li>
          <Link to="/Country"  style={{ color: 'white' }}>Country</Link>
        </li>
        <li>
          <Link to="/"  style={{ color: 'white' }}>State</Link>
        </li> */}
        {/* <li>
          <Link to="/profile">Profile</Link>
        </li> */}
        {/* Add more navigation links as needed */}
      {/* </ul>
    </div>
     */}
    </>
  );
};

export default Navbar;
