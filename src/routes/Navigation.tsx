import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Prueba from '../pages/Prueba';
import GeneralDescription from '../pages/GeneralDescription';
import TechnologiesEmployed from '../pages/TechnologiesEmployed'
import '../../src/pages/styles/navigation.css'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className='list_nav'>
            <li className='li__list'>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/prueba">Prueba</NavLink>
            </li>
            <li>
              <NavLink to="/description">Descripcion general</NavLink>
            </li>
            <li>
              <NavLink to="/technologies">Tecnologias </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="prueba" element={<Prueba />} />
          <Route path="/*" element={<Navigate to="home" replace />} />
          <Route path="description" element={<GeneralDescription />} />
          <Route path="technologies" element={<TechnologiesEmployed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
