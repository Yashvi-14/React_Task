import React from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css'
import Home from './Home';


const Sidebar = () => {
  return (
    <>
    <div className="sidenav">
  <Link to="/Country">Country</Link>
  <Link to="/State">State</Link>
  
</div>
    
    </>
  );
};

export default Sidebar;
