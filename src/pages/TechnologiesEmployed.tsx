import React from 'react';
import '../../src/pages/styles/technologiesEmployed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const TechnologiesEmployed = () => {
  return (
    <div className="container__technologies">
      <h2 className="title__technologies">
        "Las tecnologías que estamos utilizando para el desarrollo de nuestro
        sitio web abarcan tanto el frontend como el backend, así como también
        para el diseño del mismo"{' '}
      </h2>

      <div className="description__technologies">
        <p>
          En el frontend, estamos utilizando tecnologias como HTML, CSS,
          TypeScript y React para crear una experiencia interactiva y atractiva
          para nuestros usuarios. Estas tecnologías nos permiten dar vida a la
          interfaz de usuario, creando elementos visuales atractivos y una
          estructura bien organizada.
        </p>
        <p>
          Bueno y en el backend, estamos utilizando tecnologías como Node.js
          ,Javascript , PostgreSQL y Express para poder manejar la lógica y el
          procesamiento de datos. Estas tecnologías nos permiten manejar la
          autenticación de usuarios, almacenar y recuperar información de bases
          de datos, y gestionar las solicitudes y respuestas del servidor.
        </p>
      </div>

      <div className="textDesign__technologies">
        En el diseño, estamos utilizando herramientas y tecnologías como Figma,
        entre otras, para crear una experiencia visualmente impactante y
        atractiva para nuestros usuarios. Figma nos permite diseñar y prototipar
        la interfaz de usuario, colaborar de manera efectiva en el proceso de
        diseño y mantener una coherencia visual en todo el proyecto. Con Figma,
        podemos crear diseños modernos y elegantes, establecer la paleta de
        colores, definir la tipografía y asegurarnos de que cada elemento visual
        se ajuste a nuestras necesidades y objetivos de diseño.
      </div>

      <div className="inconsBox__technologies">
        <div className='boxDetailsIcon'>
          <FontAwesomeIcon className='icon__technologies' icon={faReact} />
          <p><b>React</b></p>
        </div>
        <div className='boxDetailsIcon'>
          <i className='bx bxl-typescript icon__technologies'></i>
          <p><b className='textBoxIcon'>Typescript</b></p>
        </div>
        <div className='boxDetailsIcon'>
          <FontAwesomeIcon className='icon__technologies' icon={faHtml5} />
          <p><b>HTML</b></p>
        </div>
        <div className='boxDetailsIcon'>
          <FontAwesomeIcon className='icon__technologies' icon={faCss3Alt} />
          <p><b>CSS</b></p>
        </div>
        <div className='boxDetailsIcon'>
        <FontAwesomeIcon className='icon__technologies' icon={faJs} />
          <p><b>Javascript</b></p>
        </div>
        
        <div className='boxDetailsIcon'>
          <FontAwesomeIcon className='icon__technologies' icon={faNode} />
          <p><b>Node.js</b></p>
        </div>
        <div className='boxDetailsIcon'>
          <FontAwesomeIcon className='icon__technologies' icon={faFigma} />
          <p><b>Figma</b></p>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesEmployed;
