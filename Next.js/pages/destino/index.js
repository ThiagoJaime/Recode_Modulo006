import React from "react";
import axios from "axios";
import Drop from "../../components/Drop";
import { useEffect, useState } from "react";

export default function Destino() {
  
  const [destino, setDestino] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7242/api/Destinos")
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
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
                  <h4>Destinos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>País</th>
                          <th>Preço</th>
                          <th>Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destino.map((destino) => (
                          <tr key={destino.id}>
                            <td>{destino.id}</td>
                            <td>{destino.pais}</td>
                            <td>{destino.preco}</td>
                            <td>{destino.duracao}</td>
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