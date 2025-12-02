import React, { useState } from "react";
import "./TecnicoRegistro.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUserAlt,
  FaPhoneVolume,
  FaLock,
  FaUnlock,
  FaUserCheck,
} from "react-icons/fa";
import { MdMarkEmailRead, MdHomeRepairService } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

type TypeIniditialValues = {
  nombre: string;
  telefono: string;
  email: string;
  password: string;
  passwordConfirm: string;
  lugares: string;
  servicios: string;
  precioMin: string;
  precioMax: string;
  experiencia: string;
  check: boolean;
};

const initialValues: TypeIniditialValues = {
  nombre: "",
  telefono: "",
  email: "",
  password: "",
  passwordConfirm: "",
  lugares: "",
  servicios: "",
  experiencia: "",
   precioMin: "",
  precioMax: "",
  check: false,
 
};

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre es requerido"),
  telefono: Yup.string()
    .matches(/^\d{10}$/, "Teléfono debe tener 10 dígitos")
    .required("Teléfono es requerido"),
  email: Yup.string()
    .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato inválido")
    .required("Email es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un símbolo")
    .matches(/[0-9]/, "Debe contener un número")
    .matches(/[A-Z]/, "Debe contener una mayúscula")
    .matches(/[a-z]/, "Debe contener una minúscula")
    .required("La contraseña es obligatoria"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Contraseña debe coincidir")
    .required("Confirmación es requerida"),
  lugares: Yup.string().required("Debes seleccionar una ciudad"),
  servicios: Yup.string().required("Debes seleccionar un servicio"),
  experiencia: Yup.string().required("Debes ingresar tu experiencia"),
  check: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
});

const TecnicoRegistro = () => {
  const [activar, setActivar] = useState("");

  const tecnicoRegistroLink = () => setActivar("activo");
  const tecnicoIniciaSesionLink = () => setActivar("");

  const onSubmit = (values: TypeIniditialValues, { resetForm }: any) => {
    console.log("Formulario Validado", values);
    resetForm();
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(errors);
  const navigate = useNavigate()

  return (

    <div className="formulario-registro">
    <div className={`tecnico ${activar}`}>
      <div className="box-login-tecnico">
        <div className="icono-tecnico">
          <FaUserCheck />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión Técnico</h1>
          <p className="slogan">Encuentra técnicos certificados en FixRD</p>
          <div className="tipo-usuario">
            <p className="link-cliente">
  ¿Eres cliente? <Link to="/login">Ir a Cliente</Link>
</p>
          </div>
          <div className="input-tecnico">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de usuario"
              onChange={handleChange}
              value={values.nombre}
            />
            <FaUserAlt className="icon" />
            <small className="text-red-500">{errors?.nombre}</small>
          </div>
          <div className="input-tecnico">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              value={values.email}
            />
            <MdMarkEmailRead className="icon" />
            <small className="text-red-500">{errors?.email}</small>
          </div>
          <div className="input-tecnico">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              value={values.password}
            />
            <br /><br />
            <FaLock className="icon" />
            
          </div>
          <div className="recordad-contrasena">
  <label>
    <input type="checkbox" /> Recordar Contraseña
  </label>
  <a href="https://outlook.live.com/" target="_blank" rel="noopener noreferrer">
    Olvidaste la contraseña?
  </a>
</div>
          <button type="submit" className="btn">
            Iniciar Sesión
          </button>
          <div className="registro-link-tecnico">
            <p>
              ¿No tienes una cuenta?{" "}
              <a href="#" onClick={tecnicoRegistroLink}>
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="box-register">
        <form onSubmit={handleSubmit}>
          <div className="icono-tecnico1">
            <FaUserCheck />
          </div>
          <h1>Registro Técnico</h1>
          <p className="slogan">Encuentra técnicos certificados en FixRD</p>

          <div className="fila-doble">
            <div className="input-tecnico">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
                value={values.nombre}
              />
              <FaUserAlt className="icon" />
              <small className="text-red-501">{errors?.nombre}</small>
            </div>
            <div className="input-tecnico">
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                onChange={handleChange}
                value={values.telefono}
              />
              <FaPhoneVolume className="icon" />
              <small className="text-red-501">{errors?.telefono}</small>
            </div>
          </div>

          <div className="input-tecnico">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              value={values.email}
            />
            <MdMarkEmailRead className="icon" />
            <small className="text-red-501">{errors?.email}</small>
          </div>

          <div className="fila-doble">
            <div className="input-tecnico">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
                value={values.password}
              />
              <FaLock className="icon" />
              <small className="text-red-501">{errors?.password}</small>
            </div>
            <div className="input-tecnico">
              <input
                type="password"
                name="passwordConfirm"
                placeholder="Confirmación"
                onChange={handleChange}
                value={values.passwordConfirm}
              />
              <FaUnlock className="icon" />
              <small className="text-red-501">{errors?.passwordConfirm}</small>
            </div>
          </div>

          <div className="input-tecnico">
            <select
              name="lugares"
              className="ciudades"
              value={values.lugares}
              onChange={handleChange}
            >
              <option value="">Ciudades</option>
              <option value="SantoDomingo">Santo Domingo</option>
              <option value="DistritoNacional">Distrito Nacional</option>
              <option value="Santiago">Santiago</option>
              <option value="LaVega">La Vega</option>
              <option value="PuertoPlata">Puerto Plata</option>
            </select>
            <CiLocationOn className="icon" />
            <small className="text-red-501">{errors?.lugares}</small>
          </div>

          <div className="input-tecnico">
            <select
              name="servicios"
              className="servicios"
              value={values.servicios}
              onChange={handleChange}
            >
              <option value="">Servicios</option>
              <option value="Plomeria">Plomeria</option>
              <option value="Electricidad">Electricidad</option>
              <option value="MantenimientoGeneral">
                Mantenimiento general
              </option>
              <option value="RepAire">Rep. Aire Acondicionado</option>
              <option value="OtrosServicios">Otros servicios</option>
            </select>
            <MdHomeRepairService className="icon" />
            <small className="text-red-501">{errors?.servicios}</small>
          </div>

          <label className="label-precio">Precio dominicano (RD$)</label>
          <div className="fila-precio">
            <div className="input-precio">
              <input
                type="number"
                name="precioMin"
                placeholder="Precio mínimo por hora"
                min={0}
                step={1}
                onChange={handleChange}
                value={values.precioMin}
              />
            </div>
            <div className="input-precio">
              <input
                type="number"
                name="precioMax"
                placeholder="Precio máximo por hora"
                min={0}
                step={1}
                onChange={handleChange}
                value={values.precioMax}
              />
            </div>
          </div>

          <div className="input-tecnico-number">
            <input
              type="number"
              name="experiencia"
              placeholder="Años de experiencia"
              onChange={handleChange}
              value={values.experiencia}
              min={0}
              step={1}
            />
            <FaUserAlt className="icon" />
            <small className="text-red-501">{errors?.experiencia}</small>
          </div>
          <br />
          <br />

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

          <button type="submit" className="btn" onClick={() => navigate("/tecnico")}> 
          
            Registrarse
          </button>

          <div className="registro-link-tecnico">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <a href="#" onClick={tecnicoIniciaSesionLink}>
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

export default TecnicoRegistro;
