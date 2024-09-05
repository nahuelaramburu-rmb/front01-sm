import { BrowserRouter } from "react-router-dom";
import CervezasRoutes from "../routers/cervezasroutes";
import UsuariosRoutes from "../routers/usuariosRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <CervezasRoutes />
      <UsuariosRoutes />
    </BrowserRouter>
  );
};

export default Router;
