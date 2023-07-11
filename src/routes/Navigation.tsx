import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Prueba from "../pages/Prueba"


const Navigation = () => {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li>
               <NavLink to="/home">Home</NavLink> 
            </li>
            <li>
            <NavLink to="/prueba">Prueba</NavLink> 
            </li>
        </ul>
    </nav>

    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="prueba" element={<Prueba />} />
        <Route path="/*" element={<Navigate to="home" replace />} />

    </Routes>

    </BrowserRouter>
    </>
  );
};

export default Navigation;
