const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">¿Esto resuena en tu cabeza?</h3>
          <div className="line">

            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">¿Sos inversor?</h3>
                  <p className="fn_desc fn_animated_text">
                    Pero a la hora de analizar dónde colocar tu dinero te surgen estas dudas…
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">¿Que es el mundo BlockChain?</h3>
                  <p className="fn_desc fn_animated_text">
                    The NEOH collection includes dozens of rare heads, costumes,
                    and colorways of the artists palette. They are drawn with
                    great care.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">¿Por qué elegir una inversión digital?</h3>
                  <p className="fn_desc fn_animated_text">
                    Tasty design resources made with care for each pixel.
                    Tokens, NFTs, metaverse and game resources. Access
                    additional drops.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Que es un Smart Contract y cómo aseguro mi inversión a través del mismo?</h3>
                  <p className="fn_desc fn_animated_text">
                    Be part of a community of neoh owners and create user
                    generated items. Rent, advertise, lounch stores, create
                    items.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="neoh_fn_title">
            <p className="desc">La dificultad es que no estas evolucionando con la era digital y estas perdiendo la oportunidad de conocer un mundo seguro y descentralizado para incrementar tu patrimonio e ingresos y aprovechar al máximo la tecnología puesta a tu disposición para desarrollar tus proyectos. </p>
            <p>
              Para asegurarte que tu inversión traerá la rentabilidad esperada, debes informarte sobre nuestros proyectos e iniciarte en el mundo blockchain.
              Es muy importante que conozcas todos los beneficios para brindarte mayor seguridad en tu inversión o proyecto.
            </p>
            <p>
              Si no llevas a cabo tu transformación al mundo blockchain es posible que tu crecimiento sea mucho más lento y poco seguro, en un mundo cada vez mas digital y descentralizado, perdiendo la oportunidad de llevar tu negocio a su máximo potencial.
            </p>
          </div>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
