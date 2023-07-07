import colaborators from "../utils/colaboratorsImg.ts"
import "./styles/colaborators.css"


const Colaborators = () => {
  return (
    <>
    <div  className="content">
    <div>
      <h1>Desarrolladores</h1>
      <h4>Nuestro equipo de profesionales esta compuesto por personas de distintos puntos de America Latina</h4>
      <h5>A continuacion, brindamos el capital humano involucrado en este proyecto.</h5>
    </div>
    <div className="content__colaborators">
      {
        colaborators.map((colaborator:any) => (
          <div className="content__img-colaborators" key={colaborator.img}>
            <h4>{colaborator.name}</h4>
            <img className="img_colaborator" src={colaborator.img} alt="" />
            <img className="flag" src={colaborator.flag} alt="" />
            <h5>{colaborator.description}</h5>
          </div>
        ))
      }
      </div>
      </div>
    
    </>
  )
}

export default Colaborators