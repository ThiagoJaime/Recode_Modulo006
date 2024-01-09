import { useEffect } from "react";
import Link from "next/link";

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
        <Link href="/">
          <span >
            <img
              src="/IMGs/home/logo.webp"
              style={{ width: 400, height: 70 }}
              className="rounded-pill"
            />
          </span >
        </Link>
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
              <Link href="/">
                <span  className="nav-link" aria-current="page">
                  Home
                </span >
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/destinos">
                <span  className="nav-link">Destinos</span >
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/promocoes">
                <span  className="nav-link">Promoções</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contato">
                <span  className="nav-link">Contato</span >
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cliente">
                <span  className="nav-link">Cadastros</span >
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
