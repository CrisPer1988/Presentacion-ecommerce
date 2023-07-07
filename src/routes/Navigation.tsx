import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Prueba from "../pages/Prueba";
import Dashboard from "../pages/Dashboard";
import "./styles/navigator.css"
import Colaborators from "../pages/Colaborators";
import WebUsers from "../pages/WebUsers";
import { useState } from "react";

const Navigation = () => {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <BrowserRouter>
        <nav>
         {
          show ? <i onClick={handleClick} className='bx bx-menu icons__nav'></i>
          : <i onClick={handleClick} className='bx bx-x icons__nav icons__nav-close'></i>
          }
          <ul className={`menu ${show ? "show" : ""}`}>
            <li>
              <Link onClick={handleClick} to="/home">Home</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/prueba">Prueba</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/colaborators">Colaborators</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/webUsers">Web final</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="prueba" element={<Prueba />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="colaborators" element={<Colaborators />} />
          <Route path="webUsers" element={<WebUsers />} />
          <Route path="/*" element={<Navigate to="home" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
