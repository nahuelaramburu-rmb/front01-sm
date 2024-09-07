import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

const Index = () => {
  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div class="container mt-4">
        <h3>Bienvenido a Sierra Maestra 2.0</h3>
        <div className="d-flex mx-auto p-5">
          <p>Proximamente</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
