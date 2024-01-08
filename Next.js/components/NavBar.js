import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav
    className="navbar navbar-expand-lg navbar-light bg-light "
    style={{ marginBottom: 0, backgroundColor: "#00d9ff0e !important" }}
  >
    <div className="container-fluid">
      <a href="#">
        <img
          src="/IMGs/home/logo.webp"
          style={{ width: 400, height: 70 }}
          className="rounded-pill"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ alignItems: "center" }}>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="destinos">
              Destinos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="promocoes">
              Promoções
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="contato"
            >
              Contato
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="cliente"
            >
              Cadastros
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
