import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/vistasUnicas.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">BioCumbre NFT</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                BioCumbreNFT es un proyecto que combina el arte digital y los Tokens No Fungibles (NFTs) con la conservación del medio ambiente. A través de una plataforma, artistas pueden subastar y vender obras de arte únicas relacionadas con la biodiversidad, destinando parte de los ingresos a proyectos de conservación.
              </p>
              <p>
                Este proyecto busca concienciar sobre la importancia de proteger la naturaleza y brindar apoyo a artistas comprometidos con la temática ambiental, al mismo tiempo que permite a los coleccionistas contribuir directamente a la preservación del planeta mediante la adquisición de NFTs.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/BioCumbre.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Vistas Unicas</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                El proyecto NFT "Vistas Únicas" ofrece una propuesta única en la que los compradores de NFTs del proyecto tienen la oportunidad de adquirir un módulo residencial. Estos módulos residenciales brindan a los poseedores de los NFTs la posibilidad de disfrutar de una experiencia exclusiva y única en un entorno privilegiado.
              </p>
              <p>
                Los propietarios de los NFTs también pueden obtener intereses de las ganancias generadas por el proyecto, lo que les brinda una oportunidad adicional de obtener beneficios económicos. Esta combinación de arte digital, adquisición de propiedades y participación en las ganancias hace que el proyecto "Vistas Únicas" sea atractivo tanto para los coleccionistas de NFTs como para los inversores interesados en propiedades y oportunidades financieras.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
