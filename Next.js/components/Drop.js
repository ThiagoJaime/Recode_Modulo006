import React from 'react'

function Drop() {
  return (
    <div class="dropdown">
				<a class="btn btnGroupFor dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
					aria-expanded="false">
					<i class="fa fa-gear"></i>

				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="/cliente">
						<i class="fa fa-address-card"></i> Clientes
					</a>
					<a class="dropdown-item" href="/destino">
						<i class="fa fa-plane"></i> Destinos
					</a>
					<a class="dropdown-item" href="/promocao">
						<i class="fa fa-calculator"></i> Promoções
					</a>
					<a class="dropdown-item" href="/reserva">
						<i class="fa fa-tree"></i> Reservas
					</a>
				</div>
			</div>
  )
}

export default Drop