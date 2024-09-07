import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import { pathsCer } from "../../routers/cervezasroutes";
import { pathsUsers } from "../../routers/usuariosRoutes";
import { pathsPrimary } from "../../routers/primaryRoutes";
import "./sidebar.css";

const Sidebar = () => {
  const [showUsuarios, setShowUsuarios] = useState(false);
  const [showCervezas, setShowCervezas] = useState(false);
  const [showLotes, setShowLotes] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [showProveedores, setShowProveedores] = useState(false);
  const [showInformes, setShowInformes] = useState(false);
  const [showSeguridad, setShowSeguridad] = useState(false);

  const toggleUsuarios = () => setShowUsuarios(!showUsuarios);
  const toggleCervezas = () => setShowCervezas(!showCervezas);
  const toggleLotes = () => setShowLotes(!showLotes);
  const toggleStock = () => setShowStock(!showStock);
  const toggleProveedores = () => setShowProveedores(!showProveedores);
  const toggleInformes = () => setShowInformes(!showInformes);
  const toggleSeguridad = () => setShowSeguridad(!showSeguridad);

  const getIcon = (isOpen) => (isOpen ? "bi-chevron-up" : "bi-chevron-down");

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
      style={{ width: "250px", height: "100vh" }}
    >
      <NavLink to={pathsPrimary.index} className="nav-link text-white">
        <h2 className="text-center">🍺 SM SOFT</h2>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a
            href="#usuarios"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleUsuarios}
          >
            Gestión de Usuarios{" "}
            <i className={`bi ${getIcon(showUsuarios)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showUsuarios ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <NavLink
                to={pathsUsers.crearUsuario}
                className="nav-link text-white"
              >
                Crear Usuario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={pathsUsers.listarUsuario}
                className="nav-link text-white"
              >
                Listar Usuarios
              </NavLink>
              <li className="nav-item">
                <NavLink
                  to={pathsUsers.modificarUsuario}
                  className="nav-link text-white"
                >
                  Modificar Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={pathsUsers.borrarUsuario}
                  className="nav-link text-white"
                >
                  Borrar Usuario
                </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <NavLink
                to={pathsUsers.rolespermisos}
                className="nav-link text-white"
              >
                Roles y Permisos
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#cervezas"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleCervezas}
          >
            Gestión de Cervezas{" "}
            <i className={`bi ${getIcon(showCervezas)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showCervezas ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <NavLink
                to={pathsCer.crearCerveza}
                className="nav-link text-white"
              >
                Crear Cerveza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={pathsCer.editarCerveza}
                className="nav-link text-white"
              >
                Editar Cerveza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={pathsCer.cervezas}
                end
                className="nav-link text-white"
              >
                Home Cerveza
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#lotes"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleLotes}
          >
            Gestión de Lotes <i className={`bi ${getIcon(showLotes)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showLotes ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <a href="#crear-lote" className="nav-link text-white">
                Crear Lote
              </a>
            </li>
            <li className="nav-item">
              <a href="#seguimiento-lotes" className="nav-link text-white">
                Seguimiento de Lotes
              </a>
            </li>
            <li className="nav-item">
              <a href="#control-calidad" className="nav-link text-white">
                Control de Calidad
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#stock"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleStock}
          >
            Gestión de Stock <i className={`bi ${getIcon(showStock)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showStock ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <a href="#entrada-stock" className="nav-link text-white">
                Entrada de Stock
              </a>
            </li>
            <li className="nav-item">
              <a href="#salida-stock" className="nav-link text-white">
                Salida de Stock
              </a>
            </li>
            <li className="nav-item">
              <a href="#inventario" className="nav-link text-white">
                Inventario
              </a>
            </li>
            <li className="nav-item">
              <a href="#alertas-stock" className="nav-link text-white">
                Alertas de Stock Bajo
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#proveedores"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleProveedores}
          >
            Gestión de Proveedores{" "}
            <i className={`bi ${getIcon(showProveedores)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showProveedores ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <a href="#registrar-proveedor" className="nav-link text-white">
                Registrar Proveedor
              </a>
            </li>
            <li className="nav-item">
              <a href="#historial-compras" className="nav-link text-white">
                Historial de Compras
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#informes"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleInformes}
          >
            Informes y Reportes{" "}
            <i className={`bi ${getIcon(showInformes)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showInformes ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <a href="#reportes-produccion" className="nav-link text-white">
                Reportes de Producción
              </a>
            </li>
            <li className="nav-item">
              <a href="#reportes-stock" className="nav-link text-white">
                Reportes de Stock
              </a>
            </li>
            <li className="nav-item">
              <a href="#reportes-ventas" className="nav-link text-white">
                Reportes de Ventas
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#seguridad"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={toggleSeguridad}
          >
            Seguridad <i className={`bi ${getIcon(showSeguridad)}`}></i>
          </a>
          <ul
            className={`nav flex-column ms-3 ${
              showSeguridad ? "d-block" : "d-none"
            }`}
          >
            <li className="nav-item">
              <a href="#registro-actividades" className="nav-link text-white">
                Registro de Actividades
              </a>
            </li>
            <li className="nav-item">
              <a href="#copias-seguridad" className="nav-link text-white">
                Copias de Seguridad
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
