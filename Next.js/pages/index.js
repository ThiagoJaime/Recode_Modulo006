const Index = () => {
  return (
    <>
      <section id="home" className="about-us">
        <div className="container">
          <div className="about-us-content">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-about-us">
                  <div className="about-us-txt">
                    <h2>Explore as Belezas do Mundo Agora Mesmo!</h2>
                    <div className="about-btn">
                      <a href="login.html">
                        <button className="btn about-view">Explorar</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-0">
                <div className="single-about-us"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Services */}
      <section id="service" className="service">
        <div className="container">
          <div className="service-counter text-center">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-4">
                <div className="single-service-box">
                  <div className="service-img">
                    <img src="/IMGs/service/s1.png" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h2>
                      <a href="#">pacotes turísticos incríveis</a>
                    </h2>
                    <p>
                      Descubra aventuras inesquecíveis com pacotes turísticos
                      personalizados.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="single-service-box">
                  <div className="service-img">
                    <img src="/IMGs/service/s2.png" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h2>
                      <a href="#">Reservar Hotéis de 1º Classe</a>
                    </h2>
                    <p>
                      Desfrute de luxo e conforto excepcionais ao escolher
                      acomodações de primeira classe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="single-service-box">
                  <div className="service-img">
                    <img src="/IMGs/service/s3.png" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h2>
                      <a href="#">Reserva de Voo Online</a>
                    </h2>
                    <p style={{ paddingLeft: "1em" }}>
                      Facilite suas viagens com reservas de voos convenientes e
                      flexíveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*galley start*/}
      <section id="gallery" className="gallery">
        <div className="container" style={{ maxWidth: "1140px !important" }}>
          <div className="gallery-details">
            <div className="gallary-header text-center">
              <h2>Melhores Destinos</h2>
              <p>
                Descubra os destinos mais incríveis para suas próximas aventuras!
              </p>
            </div>
            {/*/.gallery-header*/}
            <div className="gallery-box">
              <div className="gallery-content">
                <div className="filtr-container">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="filtr-item">
                        <img
                          src="/IMGs/gallary/ga01 (1).jpg"
                          alt="portfolio image"
                        />
                        <div className="item-title">
                          <a href="#">china</a>
                          <p>
                            <span>20 tours</span>
                            <span>15 places</span>
                          </p>
                        </div>
                        {/* /.item-title */}
                      </div>
                      {/* /.filtr-item */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="filtr-item">
                        <img
                          src="/IMGs/gallary/ga02.jpg"
                          alt="portfolio image"
                        />
                        <div className="item-title">
                          <a href="#">venuzuala</a>
                          <p>
                            <span>12 tours</span>
                            <span>9 places</span>
                          </p>
                        </div>{" "}
                        {/* /.item-title*/}
                      </div>
                      {/* /.filtr-item */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 d-flex justify-content-center">
                      <div className="filtr-item">
                        <img
                          src="/IMGs/gallary/gall3.jpg"
                          alt="portfolio image"
                        />
                        <div className="item-title">
                          <a href="#">brazil</a>
                          <p>
                            <span>25 tours</span>
                            <span>10 places</span>
                          </p>
                        </div>
                        {/* /.item-title */}
                      </div>
                      {/* /.filtr-item */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 d-flex justify-content-center">
                      <div className="filtr-item">
                        <img
                          src="/IMGs/gallary/gall4.jpg"
                          alt="portfolio image"
                        />
                        <div className="item-title">
                          <a href="#">australia</a>
                          <p>
                            <span>18 tours</span>
                            <span>9 places</span>
                          </p>
                        </div>{" "}
                        {/* /.item-title*/}
                      </div>
                      {/* /.filtr-item */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 d-flex justify-content-center">
                      <div className="filtr-item">
                        <img
                          src="/IMGs/gallary/gall5.jpg"
                          alt="portfolio image"
                        />
                        <div className="item-title">
                          <a href="#">Chile</a>
                          <p>
                            <span>14 tours</span>
                            <span>12 places</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Subscribe */}
      <section id="subs" className="subscribe">
        <div className="container">
          <div className="subscribe-title text-center">
            <h2>
              Junte-se aos nossos inscritos para receber todas as atualizações
            </h2>
            <p>
              Inscreva-se agora. Vamos-lhe enviar a melhor oferta para a sua viagem
            </p>
          </div>
          <form>
            <div className="row justify-content-center">
              <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-2">
                <div className="custom-input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Seu Email"
                  />
                  <button className="appsLand-btn subscribe-btn">
                    Inscreva-se
                  </button>
                  <div className="clearfix" />
                  <i className="fa fa-envelope" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
};

export default Index;
