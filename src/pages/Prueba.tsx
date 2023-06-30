import {NavLink} from "react-router-dom"
import "./styles/prevNext.css"
import image from "../assets/react.svg"


const Prueba = () => {
  return (
    <>
     <header className="header_info">
        <h1>PRUEBA</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo ab impedit amet delectus ratione minus eius cumque, similique a velit assumenda, eum ipsam quo debitis voluptate corporis sapiente expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at repellendus illum quis? Odio asperiores consequuntur suscipit repudiandae. Ratione deserunt architecto dolores nam quaerat provident id earum quas accusantium commodi?</p>
        <img src={image} alt="" />
    </header>
    <div className="next_prev">
        <NavLink to="/home">Prev</NavLink>
        <NavLink to="/">Next</NavLink>
    </div>
    </>
  )
}

export default Prueba