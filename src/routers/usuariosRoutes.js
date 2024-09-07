import { Routes, Route } from "react-router-dom";
import CrearUsuario from "../pages/usuarios/crearUsuario";
import ListarUsuario from "../pages/usuarios/listarUsuarios";
import ModificarUsuario from "../pages/usuarios/ModificarUsuario";
import BorrarUsuario from "../pages/usuarios/borrarUsuario";
import RolesPermisos from "../pages/usuarios/rolesPermisos";

export const pathsUsers = {
  crearUsuario: "/usuarios/crear",
  listarUsuario: "/usuarios/listar",
  modificarUsuario: "/usuarios/modificar",
  borrarUsuario: "/usuarios/borrar",
  rolespermisos: "/usuarios/roles",
};

const UsuariosRoutes = () => {
  return (
    <Routes>
      <Route path={pathsUsers.crearUsuario} element={<CrearUsuario />} />
      <Route path={pathsUsers.listarUsuario} element={<ListarUsuario />} />
      <Route
        path={pathsUsers.modificarUsuario}
        element={<ModificarUsuario />}
      />
      <Route path={pathsUsers.borrarUsuario} element={<BorrarUsuario />} />
      <Route path={pathsUsers.rolespermisos} element={<RolesPermisos />} />
    </Routes>
  );
};

export default UsuariosRoutes;
