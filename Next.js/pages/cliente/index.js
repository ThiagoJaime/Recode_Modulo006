import React from "react";
import axios from "axios";
import Drop from "../../components/Drop";
import { useEffect, useState } from "react";

export default function Cliente() {
  
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios
      .get("https://nasaapi.somee.com/api/clientes")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <> 
      <main>
     {/*  <p>
        <Link href="cliente/add-client" style={{ backgroundColor: "green" , color:'white', textDecoration:'none'}}>
          Inserir Categoria
        </Link>
      </p> */}
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}