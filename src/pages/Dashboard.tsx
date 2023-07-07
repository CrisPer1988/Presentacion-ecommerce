import { useState } from "react"
import "./styles/dashboard.css"
import {NavLink} from "react-router-dom"


const Dashboard = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

  return (
    <>
    
    
    <div className="content__dashboard content">
    <h1 className="title">DASHBOARD</h1>
    <header className="dashboard__header">
        <div>
        <h2>Panel de Administracion</h2>
        <p>Nuestro clientes contaran con un panel admisitrativo en el <br /> cual podran  gestionar todo su comercio. <br />
            Entre sus funionalidades se encuentran:</p>  
            <img onClick={handleShow} className={`img__dashboard ${show ? "active" : ""}`} src="/images/dashboard.png" alt="" />
        </div>
            <ul>
                <h4 className="items">Carga de productos:</h4>
                    <li>Imagenes</li>
                    <li>Titulo</li>
                    <li>Descripcion</li>
                    <li>Precio</li>
                    <li>Stock</li>
                
                <h4 className="items">Estadisticas de ventas:</h4>
                    <li>Total de ventas exitosas realizadas en un lapso de tiempo, por ejemplo; 7 dias,
                        1 mes, ultimo año.
                    </li>
                    <li>Comparativa con periodos anteriores</li>
                    <li>Numero de ventas promedio en $</li>
                
            </ul>
        
        </header>

        </div>
    <div className="next_prev">
        <NavLink to="/home">Prev</NavLink>
        <NavLink to="/">Next</NavLink>
    </div>
    
    </>
  )
}

export default Dashboard