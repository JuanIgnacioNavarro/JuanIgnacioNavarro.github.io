import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Opiniones de nuestros clientes sobre Tora developer</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Moving Blog List Shortcode */}
        <div className="neoh_fn_moving_blog">
          <ul>
            <li>
              <div className="item">
                <img src="img/blog/1.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>Empresa nro 1</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                    Titulo sobre empresa nro 1
                  </Link>
                </h3>
                <p className="fn_desc">
                  Subtitulo de empresa nro 1
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Visitar proyecto</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/2.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>Empresa nro 2</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                    Titulo sobre empresa nro 2
                  </Link>
                </h3>
                <p className="fn_desc">
                  Subtitulo sobre empresa nro 2
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Visitar proyecto</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/3.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>Empresa nro 3</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/blog-single">
                    Titulo sobre empresa nro 3
                  </Link>
                </h3>
                <p className="fn_desc">
                  Subtitulo sobre empresa nro 3
                </p>
                <p className="fn_read">
                  <Link href="/blog-single">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Visitar proyecto</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
      </div>
    </section>
  );
};
export default BlogComponent;
