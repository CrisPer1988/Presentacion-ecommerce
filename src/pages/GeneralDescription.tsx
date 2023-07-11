// import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../../src/pages/styles/generalDescription.css';

const GeneralDescription = () => {
  return (
    <div className="container__description">
      <h2 className="title__description">Descripcion General</h2>

      <div className="introducBox__description">
        <h1 className="title__introducBox">Cual es nuestra meta?</h1>
        <p className="text__introducBox">
          Nuestra meta es desarrollar una aplicación que permita a las personas
          crear su propia página web y promover el crecimiento de sus negocios.
        </p>
      </div>

      <p className="text__description">
        Estamos desarrollando una plataforma web que permitirá a las personas
        establecer su presencia en línea. En un mundo en constante evolución,
        nos comprometemos a ofrecer una solución que permita a los usuarios
        destacarse y crecer en el entorno digital. Nuestro enfoque se centra en
        proporcionar a los usuarios una amplia selección de plantillas
        profesionales altamente personalizables para la creación de sus
        sitios web. Estas plantillas proyectarán una imagen única y cautivadora
        en la web, utilizando un subdominio de nuestra plataforma. Al
        proporcionarles una identidad digital exclusiva, les brindamos la
        oportunidad de destacarse en un mundo altamente competitivo. Nuestra
        plataforma está diseñada pensando en la facilidad de uso para nuestros
        clientes. No se requieren conocimientos avanzados para utilizarla.
        Nuestra interfaz es amigable e intuitiva, lo que permite a los usuarios
        adquirir, personalizar y lanzar su sitio web en cuestión de minutos.
        Queremos simplificar el proceso y ofrecer una experiencia fluida a
        nuestros usuarios.
      </p>

      <div className="ola">
        <div className="imgBox__description">
          <img
            className="img__box"
            src="../../public/igor-miske-JVSgcV8_vb4-unsplash.jpg"
            alt="img-0"
          />
        </div>
        <div className="imgBox__description">
          <img
            className="img__box"
            src="../../public/le-buzz-studio-KiEiI2b9GkU-unsplash.jpg"
            alt="img-01"
          />
        </div>
        <div className="imgBox__description">
          <img
            className="img__box"
            src="../../public/pankaj-patel-Ylk5n_nd9dA-unsplash.jpg"
            alt="img-02"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralDescription;
