import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => (
  <section className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6 col-lg-4 text-center py-2">
        <p>Página no encontrada.</p>
        <Link to="/">
          <i className="bi bi-box-arrow-in-left"> </i> Volver al inicio
        </Link>
      </div>
    </div>
  </section>
);

export default NotFoundScreen;
