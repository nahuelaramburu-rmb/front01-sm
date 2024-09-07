import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import {
  InputField,
  InputField2,
} from "../../components/inputField/inputField";
const ModificarUsuario = (onSubmit) => {
  const [values, setValues] = useState({
    username: "",
    useremail: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div class="container mt-4">
        <h3>Editar Usuarios</h3>
        <div className="d-flex mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Nombre de usuario"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <InputField
              label="Correo"
              name="useremail"
              value={values.useremail}
              onChange={handleChange}
            />

            <br />
            <button class="btn btn-success text-white ">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModificarUsuario;
