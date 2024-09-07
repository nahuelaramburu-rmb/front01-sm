// UserForm.js
import { useState } from "react";
import { InputField } from "../../components/inputField/inputField";
import Sidebar from "../../components/sidebar/sidebar";

const BorrarUsuario = ({ onSubmit }) => {
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
        <h3>Borrar Usuario</h3>
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

            <br />
            <button class="btn btn-danger text-white ">Borrar Usuario</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BorrarUsuario;
