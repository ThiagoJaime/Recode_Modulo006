import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Drop from "../../components/Drop";

export default function Cliente() {
  
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios
      .get("http://nasaapi.somee.com/api/reservas")
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
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
                  <h4>Reservas</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nome Cliente</th>
                          <th>Valor Promo</th>
                          <th>Nome Destino</th>
                          <th>Valor Total</th>
                          <th>Data Ida</th>
                          <th>Data Volta</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservas.map((r) => (
                          <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.cliente.nome}</td>
                            <td>{r.promocao.preco}</td>
                            <td>{r.destino.pais}</td>
                            <td>{r.valor + r.destino.preco - r.promocao.preco}</td>
                            <td>{r.dataIda}</td>
                            <td>{r.dataVolta}</td>
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