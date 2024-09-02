import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const peticionBack = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    if (!email || !password) {
      setError("Debes ingresar un correo y una contraseña");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/datos", {
        email,
        password,
      });
      console.log(response.data);
      Swal.fire({
        title: "Aprobado!",
        text: "Sus credenciales son correctas,sera redigirido",
        icon: "success",
      });

      // Manejo de la respuesta exitosa, por ejemplo, redirigir o guardar el token
    } catch (error) {
      console.log("El error que tenemos es de post incorrecto");
      Swal.fire({
        title: "Desaprobado!",
        text: "Sus credenciales son incorrectas,vuelva a intentar",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="color-class d-flex align-items-center justify-content-center min-vh-100">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-6 ">
            <img
              src="https://iili.io/dOAyJ0g.md.jpg"
              class="img-fluid container-img"
              alt="Card Image"
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h1 class="card-title">Bienvenido a Sierra Maestra</h1>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={peticionBack}>
                <div class="mb-3">
                  <input
                    type="email"
                    placeholder="Ingresa su correo"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    placeholder="Ingresa su contraseña"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn shadow-effect"
                  disabled={loading}
                >
                  {loading ? "Ingresando..." : "Ingresar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
