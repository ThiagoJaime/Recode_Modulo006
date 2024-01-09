import React, { useEffect, useState } from "react";
import axios from "axios";
import Drop from "../../components/Drop";

export default function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nasaapi.somee.com/api/clientes")
      .then((response) => {
        setClientes(response.data);
        setLoading(false); // Marca o estado de carregamento como falso após o carregamento dos dados.
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
        setLoading(false); // Em caso de erro, também marca o estado de carregamento como falso.
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
                  <h4>Clientes</h4>
                </div>
                <div className="card-body">
                  {loading ? (
                    <p>Carregando...</p>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover table-borderless">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Senha</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                              <td>{cliente.id}</td>
                              <td>{cliente.nome}</td>
                              <td>{cliente.email}</td>
                              <td>{cliente.telefone}</td>
                              <td>*******</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
