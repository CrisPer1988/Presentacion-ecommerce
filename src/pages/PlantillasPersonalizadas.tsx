import '.././pages/styles/fucionalidades.css';

import './styles/plantillas.css';

const PlantillasPersonalizadas = () => {
  return (
    <div className="container">
      <h2 className="titulo">Plantillas Personalizadas</h2>

      <div className="introduccion">
        <h1 className="titulo-introduccion">Únicas y estilizadas</h1>
        <p className="texto-introduccion fade-in">
          Conquistamos el mundo digital con plantillas de comercio electrónico,
          exclusivas y con estilo. ¡Deshazte de lo común!
        </p>
        <ul className="texto-numeros">
          <li className="numero fade-in">300</li>
          <li className="descripcion fade-in">Diseños Impresionantes</li>
          <li className="numero fade-in">500</li>
          <li className="descripcion fade-in">Clientes Felices</li>
          <li className="numero fade-in">100</li>
          <li className="descripcion fade-in">Más Adaptabilidad</li>
        </ul>
        <h1 className="titulo-maravillas fade-in">Nuestras Maravillas</h1>
      </div>
      <p className="texto">
        Asimismo, se ha implementado un sistema de seguimiento
      </p>

      <div className="plantillas-container">
        <div className="imagen-container">
          <p className="texto fade-in">Calidad</p>
          <img
            className="imagen-box animate-zoom"
            src="../../calidad.jpg"
            alt="calidad"
          />
        </div>

        <div className="caja-texto fade-in">
          <p className="texto">Incorporamos</p>
        </div>

        <div className="imagen-container">
          <img
            className="imagen-box animate-zoom"
            src="../../innovation.jpg"
            alt="innovation"
          />
        </div>

        <div className="imagen-container">
          <p className="texto fade-in">Optimización</p>
          <img
            className="imagen-box animate-zoom"
            src="../../optimizacion.jpg"
            alt="optimizacion"
          />
        </div>

        <div className="caja-texto fade-in"></div>
      </div>

      <h1 className="fade-in">Nuestro Equipo</h1>
      <p className="fade-in">
        Profesionales altamente talentosos que transforman ideas en realidad.
      </p>

      <div className="images-container">
        <img
          className="img animate-fade"
          src="../../images/aaron.jpg"
          alt="Aaron"
        />

        <img
          className="img animate-fade"
          src="../../images/alex.jpg"
          alt="Alex"
        />

        <img
          className="img animate-fade"
          src="../../images/cristian.jpg"
          alt="Cristian"
        />

        <img
          className="img animate-fade"
          src="../../images/derian.jpg"
          alt="Derian"
        />

        <img
          className="img animate-fade"
          src="../../images/jamar.jpg"
          alt="Jamar"
        />

        <img
          className="img animate-fade"
          src="../../images/max.jpg"
          alt="Max"
        />

        <img
          className="img animate-fade"
          src="../../images/jeremi.png"
          alt="Jeremi"
        />
      </div>

      <h1 className="fade-in">Comienza hoy</h1>
      <p className="fade-in">
        Eleva tu negocio con nuestras plantillas personalizadas de comercio
        electrónico. ¡No te quedes atrás y comienza a brillar en el mundo
        digital!
      </p>

      <button type="button" className="animate-pulse">
        Explora portafolio
      </button>
      <button type="button" className="animate-pulse">
        Contrátanos
      </button>
    </div>
  );
};

export default PlantillasPersonalizadas;
