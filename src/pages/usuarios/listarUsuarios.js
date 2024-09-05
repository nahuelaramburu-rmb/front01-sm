import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

const ListarUsuario = () => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <Sidebar />
        <div class="container mt-4">
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo Electrónico</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>Acciones</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Juan Pérez</td>
                  <td>juan.perez@example.com</td>
                  <td>(123) 456-7890</td>
                  <td>Calle Falsa 123</td>
                  <th>ADMIN</th>
                  <td>Calle Falsa 123</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ana Gómez</td>
                  <td>ana.gomez@example.com</td>
                  <td>(098) 765-4321</td>
                  <td>Avenida Siempre Viva 742</td>
                  <th>Empleado</th>
                  <td>Calle Falsa 123</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pedro Rodríguez</td>
                  <td>pedro.rodriguez@example.com</td>
                  <td>(555) 555-5555</td>
                  <td>Ruta 40, Km 32</td>
                  <th>consumidor</th>
                  <td>Calle Falsa 123</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarUsuario;
