import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import GeneralDescription from "../pages/GeneralDescription";
import Dashboard from "../pages/Dashboard";
import TechnologiesEmployed from "../pages/TechnologiesEmployed";
import WebUsers from "../pages/WebUsers";


const Navigation = () => {
  // const [show, setShow] = useState(true)

  // const handleClick = () => {
  //   setShow(!show)
  // }

  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li>
               <NavLink to="/home">Home</NavLink> 
            </li>
            <li>
            <NavLink to="/general">General</NavLink> 
            </li>
            <li>
            <NavLink to="/dashboard">Dashboard</NavLink> 
            </li>
            <li>
            <NavLink to="/technologies">Technologies</NavLink> 
            </li>
            <li>
            <NavLink to="/webUsers">Web Users</NavLink> 
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
