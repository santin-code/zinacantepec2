import React from "react";
import "./secciones.css";
import Section from "./Section";
import imagen1 from "../logos/LOGO-COMPONENTES/captura-diamantes.PNG";
import imagen2 from "../logos/LOGO-COMPONENTES/captura-recargas.PNG";
import imagen3 from "../logos/LOGO-COMPONENTES/captura-servicios.PNG";
import Titulo1 from "../logos/LOGO-COMPONENTES/titulo__diamantes2.png";
import Titulo2 from "../logos/LOGO-COMPONENTES/titulo__recargas2.png";
import Titulo3 from "../logos/LOGO-COMPONENTES/titulo__impresiones2.png";
import Titulo4 from "../logos/LOGO-COMPONENTES/titulo-servicios2.png";

const Secciones = ({}) => {
  return (
    <div className="contenedor__secciones">
      <div className=" size__container">
        <Section
          path="https://pagostore.com/app"
          classNameTitle="mediana"
          imageTitle={Titulo1}
          imageSection={imagen1}
          alt="l"
        />
        <Section
          path="https://tusaldotelcel.com"
          classNameTitle="mediana"
          imageTitle={Titulo2}
          imageSection={imagen2}
          alt="l"
        />

        <Section
          path="/Descuentos"
          classNameTitle="grande"
          imageTitle={Titulo3}
          imageSection={imagen3}
          alt="l"
        />

        <Section
          path="/Descuentos"
          classNameTitle="mediana"
          imageTitle={Titulo4}
          imageSection={imagen2}
          alt="l"
        />
      </div>
    </div>
  );
};

export default Secciones;
