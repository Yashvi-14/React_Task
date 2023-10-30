import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './components/Login';

import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Logout from './components/Logout';
import State from './components/State';
import Country from './components/Country';
import Home from './components/Home';


function App() {
  return (
   <>
   {/* <Navbar/>
   <Sidebar/> */}

   
   <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/Home' element={<Home />} />
   <Route path='/State' element={<State />} />
   <Route path='/Logout' element={<Logout />} />
   <Route path='/Country' element={<Country />} />
</Routes>

      
    
   </>
  );
}

export default App;
