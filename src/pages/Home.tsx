import {NavLink} from "react-router-dom"
import image from "../assets/react.svg"
import "./styles/headers.css"

const Home = () => {
  return (
    <>
    <header className="header_info">
        <h1>HOME</h1>
        <ul>
            <li>Descripcion general/ Aaron /</li>
            <li>Tecnologias empleadas/ Aaron /</li>
            <li>Funcionalidades/ Derian /</li>
            <li>Plantillas persolanizadas/ Derian /</li>
            <li>Dashboard/ Cristian /</li>
            <li>Web usuario final/ Cristian /</li>
            
        </ul>
        <img src={image} alt="" />
    </header>
    <div className="next_prev">
        <NavLink to="/home">Prev</NavLink>
        <NavLink to="/prueba">Next</NavLink>
    </div>
    </>

  )
}

export default Home