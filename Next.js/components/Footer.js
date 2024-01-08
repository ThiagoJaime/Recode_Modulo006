import React from 'react'

function Footer() {
  return (
    <footer className="footer-copyright">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-sm-3">
              <div className="single-footer-item text-center">
                <div className="footer-logo">
                  <a href="index.html">
                    NASA<span> Airline</span>
                  </a>
                  <p>Best Travel Agency</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-footer-item text-center">
                <h2>link</h2>
                <div className="single-footer-txt">
                  <p>
                    <a href="#">home</a>
                  </p>
                  <p>
                    <a href="#">destinos</a>
                  </p>
                  <p>
                    <a href="#">promoções</a>
                  </p>
                  <p>
                    <a href="#">contato</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-footer-item text-center">
                <h2>popular destination</h2>
                <div className="single-footer-txt">
                  <p>
                    <a href="#">Suiça</a>
                  </p>
                  <p>
                    <a href="#">Tailândia</a>
                  </p>
                  <p>
                    <a href="#">Brazil</a>
                  </p>
                  <p>
                    <a href="#">Inglaterra</a>
                  </p>
                  <p>
                    <a href="#">Londres</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-footer-item text-center">
                <h2 className="text-left">contacts</h2>
                <div className="single-footer-txt text-left">
                  <p>+55 (21) 9595-4545</p>
                  <p className="foot-email">
                    <a href="#">nasa@agency.com</a>
                  </p>
                  <p>Avenida Atlântica Bloco 445/B</p>
                  <p>Rio de Janeiro, BRA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ height: 2 }} />
        <div className="foot-icons">
          <ul className="footer-social-links list-inline list-unstyled d-flex justify-content-center">
            <li>
              <a href="#" target="_blank" className="foot-icon-bg-1">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="foot-icon-bg-2">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="foot-icon-bg-3">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
          <p>
            © 2023 <a href="">NASA Airline</a>. Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer