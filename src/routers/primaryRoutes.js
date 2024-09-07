import { Routes, Route } from "react-router-dom";
import Index from "../pages/primary/index";

export const pathsPrimary = {
  index: "/",
};

const PrimaryRoutes = () => {
  return (
    <Routes>
      <Route path={pathsPrimary.index} element={<Index />} />
    </Routes>
  );
};

export default PrimaryRoutes;
