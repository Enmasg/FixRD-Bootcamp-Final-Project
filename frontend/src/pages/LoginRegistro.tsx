import React, { useState } from "react";
import "./LoginRegistro.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUserAlt,
  FaPhoneVolume,
  FaLock,
  FaUnlock,
  FaUserCheck,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

type TypeIniditialValues = {
  nombre: string;
  telefono: string;
  email: string;
  password: string;
  passwordConfirm: string;
  opcion: string;
  check: boolean;
};
type RegisterFetch = {
  email: string;
  name?: string;
  password: string;
};
const initialValues: TypeIniditialValues = {
  nombre: "",
  telefono: "",
  email: "",
  password: "",
  passwordConfirm: "",
  opcion: "",
  check: false,
};

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre es requerido"),
  telefono: Yup.string()
    .matches(/^\d{10}$/, "Teléfono debe tener al menos 10 dígitos")
    .required("Teléfono es requerido"),
  email: Yup.string()
    .required("Email es requerido")
    .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato inválido"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un símbolo")
    .matches(/[0-9]/, "Debe contener un número")
    .matches(/[A-Z]/, "Debe contener una mayúscula")
    .matches(/[a-z]/, "Debe contener una minúscula"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Contraseña debe coincidir")
    .required("Confirmación es requerida"),
  check: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
});

const LoginRegistro = () => {
  const [accion, setAccion] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const registroLink = () => setAccion("activo");
  const iniciaSesionLink = () => setAccion("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    await fetchRegister();
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const fetchRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          name: values.nombre,
          password: values.password,
        }),
      });

      if (response.status === 204) {
        resetForm();
        return null;
      } else {
        setRegisterError("Hubo un error intente mas tarde");
      }
    } catch (e: any) {
      console.error("Register error:", e);
      alert("Error registering user");
      return null;
    }
  };

  const fetchLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate("/cliente");
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (e: any) {
      console.error("Register error:", e);
      alert("Error registering user");
      return null;
    }
  };

  return (
    <div className="Formulario">
      <div className={`cliente ${accion}`}>
        <div className="box-login">
          <div className="icono-usuario">
            <FaUserCheck />
          </div>

          <form>
            <h1>Iniciar Sesión Cliente </h1>
            <p className="slogan">Encuentra técnicos certificados en FixRD</p>
            <div className="tipo-usuario">
              {/*   <p className="link-tecnico">¿Eres técnico? <Link to="/tecnico">Ir a Técnico</Link></p> */}

              <p className="link-tecnico">
                ¿Eres técnico? <Link to="/register">Ir a Técnico</Link>
              </p>
              {registerError && <p style={{ color: "red" }}>{registerError}</p>}
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <MdMarkEmailRead className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <FaLock className="icon" />
            </div>

            <div className="recordad-contrasena">
              <label>
                <input type="checkbox" name="password" /> Recordar Contraseña
              </label>
              <a href="#">Olvidaste la contraseña?</a>
            </div>

            <button type="submit" className="btn" onClick={fetchLogin}>
              Iniciar Sesión
            </button>

            <div className="registro-link">
              <p>
                ¿No tienes una cuenta?{" "}
                <a href="#" onClick={registroLink}>
                  Regístrate
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="box-register">
          <form onSubmit={handleSubmit}>
            <div className="icono-usuario1">
              <FaUserCheck />
            </div>

            <h1>Registro Cliente</h1>
            <p className="slogan">Encuentra técnicos certificados en FixRD</p>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}

            <div className="fila-doble">
              <div className="input-box">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={values.nombre}
                />
                <small className="text-red-501">{errors?.nombre}</small>
                <FaUserAlt className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="telefono"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={values.telefono}
                />
                <small className="text-red-501">{errors?.telefono}</small>
                <FaPhoneVolume className="icon" />
              </div>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
                value={values.email}
              />
              <small className="text-red-501">{errors?.email}</small>
              <MdMarkEmailRead className="icon" />
            </div>

            <div className="fila-doble">
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  value={values.password}
                />
                <small className="text-red-501">{errors?.password}</small>
                <FaLock className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirmación"
                  onChange={handleChange}
                  value={values.passwordConfirm}
                />
                <small className="text-red-501">
                  {errors?.passwordConfirm}
                </small>
                <FaUnlock className="icon" />
              </div>
            </div>

            <div className="input-box">
              <select
                name="lugares"
                className="ciudades"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                required
              >
                <option>Ciudades</option>
                <option value="SantoDomingo">Santo Domingo</option>
                <option value="DistritoNacional">Distrito Nacional</option>
                <option value="Santiago">Santiago</option>
                <option value="LaVega">La Vega</option>
                <option value="PuertoPlata">Puerto Plata</option>
              </select>

              <CiLocationOn className="icon" />
            </div>
            <div className="recordad-contrasena">
              <label>
                <input
                  type="checkbox"
                  name="check"
                  checked={values.check}
                  onChange={handleChange}
                />
                Estoy de acuerdo con los términos y condiciones
                <small className="text-red-501">{errors?.check}</small>
              </label>
            </div>

            <button type="submit" className="btn">
              Registrarse
            </button>

            <div className="registro-link">
              <p>
                ¿Ya tienes una cuenta?{" "}
                <a href="#" onClick={iniciaSesionLink}>
                  Iniciar Sesión
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistro;
