import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import GeneralDescription from "../pages/GeneralDescription";
import Dashboard from "../pages/Dashboard";
import TechnologiesEmployed from "../pages/TechnologiesEmployed";
import WebUsers from "../pages/WebUsers";
import "./styles/navigator.css"
import { useState } from "react";


const Navigation = () => {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
    <BrowserRouter>
    {
            show ? <i onClick={handleClick} className='bx bx-menu icons__nav'></i> : <i onClick={handleClick} className='bx bx-x icons__nav icons__nav-close'></i>
          }
    <nav>
   
        <ul className={`menu ${show ? "show" : ""}`}>
            <li>
               <NavLink className="items__nav" onClick={handleClick} to="/home">Home</NavLink> 
            </li>
            <li>
            <NavLink className="items__nav" onClick={handleClick} to="/general">General</NavLink> 
            </li>
            <li>
            <NavLink className="items__nav" onClick={handleClick} to="/dashboard">Dashboard</NavLink> 
            </li>
            <li>
            <NavLink className="items__nav" onClick={handleClick} to="/technologies">Technologies</NavLink> 
            </li>
            <li>
            <NavLink className="items__nav" onClick={handleClick} to="/webUsers">Web Users</NavLink> 
            </li>
        </ul>
    </nav>

    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="general" element={<GeneralDescription />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="technologies" element={<TechnologiesEmployed />} />
        <Route path="webUsers" element={<WebUsers />} />
        <Route path="/*" element={<Navigate to="home" replace />} />
    </Routes>

    </BrowserRouter>
    </>
  );
};

export default Navigation;
