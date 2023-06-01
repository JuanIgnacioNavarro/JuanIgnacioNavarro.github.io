import { Fragment, useState } from "react";
import ProductPopup from "./popup/ProductPopup";
import Timeline from "./Timeline";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "", dec: "" });
  const dropData = [
    {
      img: "img/drops/1.jpg",
      title: "Primer etapa",
      dec: "Necesitamos analizar tu proyecto, conocer tu idea e inversión disponible, e identificar los puntos en los que necesitas nuestra ayuda para impulsarte:"
    },
    {
      img: "img/drops/2.jpg",
      title: "Segunda etapa",
      dec: "Nos encargamos de relevar todos los aspectos y aristas de tu proyecto y evaluar la viabilidad del mismo:"
    },
    {
      img: "img/drops/3.jpg",
      title: "Tercer etapa",
      dec: "Cada una de las áreas desarrollará su propuesta en función del análisis y relevamiento y presentará una propuesta integral del negocio:"
    },
    {
      img: "img/drops/4.jpg",
      title: "Cuarta etapa",
      dec: "La cultura de la empresa esta basada en la mejora continua por lo tanto, se realiza una auditoría total del proyecto por área para relevar información consolidada según planificación."
    },
    {
      img: "img/drops/5.jpg",
      title: "Quinta etapa",
      dec: "Se inicia el proyecto (Planificación por tramos con fechas objetivo y montos de inversión)."
    },
    {
      img: "img/drops/6.jpg",
      title: "Sexta etapa",
      dec: "A través de informes mensuales analizamos el funcionamiento de cada proyecto y realizamos seguimiento de forma individual para cumplir con las proyecciones establecidas en la etapa inicial."
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title, dec } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
        dec={dec}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Tenemos la solución</h3>
          </div>
          <div className="neoh_fn_title">
            <h4 className="fn_title">¿Cómo funciona nuestro servicio?</h4>
            <div className="line">
              <span />
            </div>
          </div>
          <div className="neoh_fn_title">
            <p className="desc">En TORA DEVELOPER somos expertos en desarrollar proyectos con tecnología blockchain, del rubro inmobiliario, tecnológico o financiero. Tenemos la solución integral para tus proyectos, con un equipo multidisciplinario y una estrategia especialmente diseñada para inversores del mundo digital, que incluye fondos de inversión, desarrollo web, marketing digital y publicidad, legales, puesta en marcha, administración, etc; a través de una herramienta completamente confiable y segura llamada SMART CONTRACT.</p>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="neoh_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/1.jpg"
                  data-modal-title="Analisis de Proyecto"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/1.jpg" alt="" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(1)}>Analisis de Proyecto</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/2.jpg"
                  data-modal-title="Neoh #4587"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url=""
                  data-modal-discord-url="#"
                >
                  <div className="img_holder">
                    <img src="img/drops/2.jpg" alt="" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(2)}>Relevamiento</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/3.jpg"
                  data-modal-title="Neoh #4586"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/3.jpg" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(3)}>Propuesta de Negocio</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/4.jpg"
                  data-modal-title="Neoh #4585"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/4.jpg" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(4)}>Revisión y optimización</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/5.jpg"
                  data-modal-title="Neoh #4584"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/5.jpg" alt="" />
                    <a onClick={() => onClick(5)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(5)}>Puesta en Marcha</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="img/drops/6.jpg"
                  data-modal-title="Neoh #4583"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="img/drops/6.jpg" alt="" />
                    <a onClick={() => onClick(6)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(6)}>Gestión Comercial</a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
          <Timeline />
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
