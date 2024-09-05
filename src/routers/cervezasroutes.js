import { Routes, Route } from "react-router-dom";
import HomeCervezas from "../pages/cervezas/homeCervezas";
import CrearCervezas from "../pages/cervezas/crearCerveza";
import EditarCerveza from "../pages/cervezas/editarCerveza";
import EliminarCerveza from "../pages/cervezas/eliminarCerveza";

export const pathsCer = {
  cervezas: "/Cervezas",
  crearCerveza: "/Cervezas/crear",
  editarCerveza: "/Cervezas/editar/:id",
  eliminarCerveza: "/Cervezas/eliminar/:id",
};

const CervezasRoutes = () => {
  return (
    <Routes>
      <Route path={pathsCer.cervezas} element={<HomeCervezas />} />
      <Route path={pathsCer.crearCerveza} element={<CrearCervezas />} />
      <Route path={pathsCer.editarCerveza} element={<EditarCerveza />} />
      <Route path={pathsCer.eliminarCerveza} element={<EliminarCerveza />} />
    </Routes>
  );
};

export default CervezasRoutes;
