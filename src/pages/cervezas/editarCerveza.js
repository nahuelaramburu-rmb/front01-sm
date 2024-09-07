import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import {
  InputField,
  InputField2,
} from "../../components/inputField/inputField";
const EditarCerveza = (onSubmit) => {
  const [values, setValues] = useState({
    beername: "",
    beercount: "",
    beervariety: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const options = [
    { value: "Rubia", label: "Rubia" },
    { value: "Negra", label: "Negra" },
    { value: "Roja", label: "Roja" },
    { value: "Sin Alcohol", label: "Sin Alcohol" },
  ];
  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div class="container mt-4">
        <h3>Editar variedad de birra</h3>
        <div className="d-flex mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Nombre de la birra"
              name="beername"
              value={values.beername}
              onChange={handleChange}
            />
            <InputField
              label="Litros"
              name="birralitros"
              value={values.beercount}
              onChange={handleChange}
            />
            <InputField2
              label="Variedad"
              name="beervariety"
              value={values.beervariety}
              onChange={handleChange}
              options={options}
            />
            <br />
            <button class="btn btn-success text-white ">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarCerveza;
