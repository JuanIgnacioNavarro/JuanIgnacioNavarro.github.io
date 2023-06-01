import Link from "next/link";
const PainPoint = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">

          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Atención inversor</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Si estás buscando una solución efectiva para comercializar tu proyecto y atraer inversores, la blockchain es la respuesta. Al desarrollar y comercializar el proyecto en la blockchain, podes aprovechar la seguridad y transparencia que ofrece esta tecnología revolucionaria.
              </p>
              <p>
                Mediante la creación de tokens digitales y la implementación de contratos inteligentes, atraemos inversores de todo el mundo, eliminando intermediarios, reduciendo costos y aumentando la eficiencia. Además, hay expertos en blockchain disponibles para guiarte en todo el proceso y asegurar el éxito de su proyecto. No pierdas la oportunidad de estar a la vanguardia de la tecnología y transformar su proyecto en un éxito comercial.
              </p>
            </div>
          </div>

          <div className="content_item">
            <div className="desc">
              <p>
                Crees que no tenes las herramientas para desarrollarlo? No te preocupes en TORA DEVELOPER tenemos un equipo multidisciplanario que puede tokenizar y comercializar tu proyecto Inmobiliario, financiero y tecnológico.
              </p>
              <p>
                aca va el calendario
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/checked.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Coordinar Reunión</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PainPoint;
