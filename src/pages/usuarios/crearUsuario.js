// UserForm.js
import { useState } from "react";
import {
  InputField,
  InputField2,
} from "../../components/inputField/inputField";
import Sidebar from "../../components/sidebar/sidebar";

const CrearUsuario = ({ onSubmit }) => {
  const [values, setValues] = useState({
    username: "",
    useremail: "",
    userol: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const options = [
    { value: "1", label: "Nivel 1" },
    { value: "2", label: "Nivel 2" },
    { value: "3", label: "Nivel 3" },
    { value: "4", label: "Nivel 4" },
  ];

  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div class="container mt-4">
        <h3>Crear Usuario</h3>
        <div className="d-flex mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Nombre usuario"
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
            <InputField2
              label="Nivel de Rol"
              name="userol"
              value={values.userol}
              onChange={handleChange}
              options={options}
            />
            <br />
            <button class="btn btn-info text-white ">Crear Usuario</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
