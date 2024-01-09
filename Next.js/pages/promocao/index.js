import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Drop from "../../components/Drop";

export default function Promocao() {
  
  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    axios
      .get("https://nasaapi.somee.com/api/promocoes")
      .then((response) => {
        setPromocoes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de promos:", error);
      });
  }, []);

  return (
    <> 
      <main>
        <section className="container py-5">
          <Drop />
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-people-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Promoção</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Preço</th>
                          <th>Validade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {promocoes.map((promo) => (
                          <tr key={promo.id}>
                            <td>{promo.id}</td>
                            <td>{promo.preco}</td>
                            <td>{promo.validade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}