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
import { Link } from "react-router-dom";

type TypeIniditialValues = {
  nombre: string;
  telefono: string;
  email: string;
  password: string;
  passwordConfirm: string;
  opcion: string;
  check: boolean;
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

  const registroLink = () => setAccion("activo");
  const iniciaSesionLink = () => setAccion("");

  const onSubmit = (values: TypeIniditialValues, { resetForm }: any) => {
    console.log("Formulario Validado", values);
    resetForm();
    console.log("Formulario limpio")
    setCiudad("");
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log (errors)
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
  <p className="link-tecnico">¿Eres técnico? <Link to="/tecnico">Ir a Técnico</Link></p>
</div>


          <div className="input-box">
            <input type="text" name="nombre" placeholder="Nombre de usuario" />
            <FaUserAlt className="icon" />
          </div>

          <div className="input-box">
            <input type="email" name="email" placeholder="Correo electrónico" />
            <MdMarkEmailRead className="icon" />
          </div>

          <div className="input-box">
            <input type="password" name="password" placeholder="Contraseña" />
            <FaLock className="icon" />
          </div>
          

          <div className="recordad-contrasena">
            <label>
              <input type="checkbox" name="password" /> Recordar Contraseña
            </label>
            <a href="#">Olvidaste la contraseña?</a>
          </div>

          <button type="submit" className="btn">
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
              <small className="text-red-501">{errors?.passwordConfirm}</small>
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