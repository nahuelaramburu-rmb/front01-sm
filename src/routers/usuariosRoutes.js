import { Routes, Route } from "react-router-dom";
import CrearUsuario from "../pages/usuarios/crearUsuario";
import ListarUsuario from "../pages/usuarios/listarUsuarios";

export const pathsUsers = {
  crearUsuario: "/usuarios/crear",
  listarUsuario: "/usuarios/listar",
};

const UsuariosRoutes = () => {
  return (
    <Routes>
      <Route path={pathsUsers.crearUsuario} element={<CrearUsuario />} />
      <Route path={pathsUsers.listarUsuario} element={<ListarUsuario />} />
    </Routes>
  );
};

export default UsuariosRoutes;
