import React from 'react';
import Link from 'next/link';

function Drop() {
  return (
    <div className="dropdown">
      <a className="btn btnGroupFor dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa fa-gear"></i>
      </a>
      <div className="dropdown-menu">
        <Link href="/cliente">
          <span className="dropdown-item">
            <i className="fa fa-address-card"></i> Clientes
          </span>
        </Link>
        <Link href="/destino">
          <span  className="dropdown-item">
            <i className="fa fa-plane"></i> Destinos
          </span>
        </Link>
        <Link href="/promocao">
          <span className="dropdown-item">
            <i className="fa fa-calculator"></i> Promoções
          </span >
        </Link>
        <Link href="/reserva">
          <span  className="dropdown-item">
            <i className="fa fa-tree"></i> Reservas
          </span >
        </Link>
      </div>
    </div>
  );
}

export default Drop;
