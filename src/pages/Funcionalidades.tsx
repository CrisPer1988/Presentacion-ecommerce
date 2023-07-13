import '../pages/styles/fucionalidades.css';

const Funcionalidades = () => {
  return (
    <div className="container__funcionalidades">
      <h2 className="titulo__funcionalidades">Funcionalidades</h2>

      <div className="introducbox__funcionalidades">
        <h1 className="titulo__introducbox">
          Experiencia de compra y venta, satisfactoria
        </h1>
        <p className="text__introducbox">
          Ofrecemos una amplia gama de funcionalidades para proporcionar a los
          usuarios una experiencia de compra segura, completa y satisfactoria.
          Entre estas características destacadas se encuentran un sistema de
          búsqueda intuitivo y avanzado. Brindamos sugerencias relevantes para
          impulsar la exploración y aumentar las ventas cruzadas.
        </p>
      </div>

      <div className="funtion">
        <div className="imgf__funtionalidades">
          <img
            className="img__f"
            src="../../../ecommerce-D.png"
            alt="ecommerce-D.png"
          />
        </div>

        <div className="caja__text__funcionalidades">
          <p className="text__funcionalidades">
            Incorporamos un carrito de compras optimizado. Ofrecemos múltiples
            opciones de pago seguras y confiables, como tarjetas de crédito,
            transferencias bancarias y billeteras electrónicas, brindando
            comodidad y tranquilidad a los usuarios.
          </p>
        </div>

        <div className="imgf__funtionalidades">
          <img
            className="imf__box"
            src="../../../tienda-A.jpg"
            alt="tienda-A.jpg"
          />
        </div>
        <div className="caja__text__funcionalidades">
          <p className="text__funcionalidades">
            Asimismo, se ha implementado un sistema de seguimiento de pedidos en
            tiempo real, que permite a los clientes rastrear el estado de sus
            compras desde el momento de la compra hasta la entrega. Finalmente,
            contamos con una plataforma de atención al cliente eficiente y
            accesible, que incluye chat en vivo, correo electrónico y atención
            telefónica, para resolver cualquier consulta o problema de los
            usuarios de manera rápida y efectiva. En conjunto, estas
            funcionalidades en el ecommerce creado para ventas garantizan una
            experiencia de compra fluida y satisfactoria, fomentando la
            fidelidad del cliente y el crecimiento del negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Funcionalidades;
