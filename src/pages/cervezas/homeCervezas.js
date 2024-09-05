import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
const HomeCerveza = () => {
  return (
    <div>
      <div className="d-flex justify-content-start">
        <Sidebar />
        <div class="container mt-4">
          <h2 c>LISTADO DE CERVEZAS</h2>
          <div class="mb-3 d-flex justify-content-end">
            <button class="btn btn-success" id="btn-add">
              Agregar Nueva
            </button>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Estilo</th>
                  <th>Variedad</th>
                  <th>Stock</th>
                  <th>Lote</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rubia Argenta</td>
                  <td>Rubia</td>
                  <td>Golden 4%</td>
                  <td>567 Lts</td>
                  <td>123123131</td>
                  <td>
                    <button class="btn btn-warning me-3 btn-custom">
                      Editar
                    </button>
                    <button class="btn btn-danger me-3btn-custom">
                      Borrar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Black Birra</td>
                  <td>Negra</td>
                  <td>Black 8%</td>
                  <td>100 Lts</td>
                  <td>67546</td>
                  <td>
                    <button class="btn btn-warning me-3 btn-custom">
                      Editar
                    </button>
                    <button class="btn btn-danger me-3 btn-custom">
                      Borrar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Half Half</td>
                  <td>Hibrida Roja y Negra</td>
                  <td>10%</td>
                  <td>30 Lts</td>
                  <td>13</td>
                  <td>
                    <td>
                      <button class="btn btn-warning me-3 btn-custom">
                        Editar
                      </button>
                      <button class="btn btn-danger me-3 btn-custom">
                        Borrar
                      </button>
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCerveza;
