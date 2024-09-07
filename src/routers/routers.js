import { BrowserRouter } from "react-router-dom";
import CervezasRoutes from "../routers/cervezasroutes";
import UsuariosRoutes from "../routers/usuariosRoutes";
import PrimaryRoutes from "../routers/primaryRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <PrimaryRoutes />
      <CervezasRoutes />
      <UsuariosRoutes />
    </BrowserRouter>
  );
};

export default Router;
