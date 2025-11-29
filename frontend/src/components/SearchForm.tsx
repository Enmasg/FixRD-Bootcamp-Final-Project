import { useFormik } from "formik";
import "./SearchForm.css";
import { IoTimeSharp } from "react-icons/io5";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";


type TypeIniditialValues = {
  servicios: string;
  lugares: string;
  fecha: string;
};

const initialValues: TypeIniditialValues = {
  servicios: "",
  lugares: "",
  fecha: "",
};

const validationSchema = Yup.object({
  servicios: Yup.string().required("Servicio es requerido"),
  lugares: Yup.string().required("Lugar es necesario"),
  fecha: Yup.string().required("La fecha es requerida"),
});

const SearchForm = () => {
  const navigate = useNavigate()
  const onSubmit = (values: TypeIniditialValues, { resetForm }: any) => {
    console.log("Formulario Validado", values);
    resetForm();
    console.log("Formulario Limpio");
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  console.log(errors);
  return (
    <>
      <div className="CONTAINER1">
        <form className="formulariocabezera" onSubmit={handleSubmit}>
          
          {/* Campo Servicios */}
          <div className="campo-wrapper">
            <select
              name="servicios"
              className="servicios"
              value={values.servicios}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Servicios</option>
              <option value="electricidad">Electricidad</option>
              <option value="plomeria">Plomería</option>
              <option value="reparacionelectrodomesticos">
                Reparación de Electrodomésticos
              </option>
              <option value="refrigeracionyclimatizacion">
                Refrigeración y Climatización
              </option>
            </select>
            {touched.servicios && errors.servicios && (
              <small className="text-red-500">{errors.servicios}</small>
            )}
          </div>

        
          <div className="campo-wrapper ubicacion">
            <select
              name="lugares"
              className="ciudad"
              value={values.lugares}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Ubicacion</option>
              <option value="SantoDomingo">Santo Domingo</option>
              <option value="Santiago">Santiago</option>
              <option value="LaVega">La Vega</option>
              <option value="SanCristobal">San Cristobal</option>
              <option value="PuertoPlata">Puerto Plata</option>
            </select>
            {touched.lugares && errors.lugares && (
              <small className="text-red-500">{errors.lugares}</small>
            )}
          </div>

     
          <div className="campo-wrapper fecha">
            <input
              type="date"
              name="fecha"
              value={values.fecha}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.fecha && errors.fecha && (
              <small className="text-red-500">{errors.fecha}</small>
            )}
          </div>


          <div className="btn-tecnico">
            <button 
              className="btn-1"
              type="button"
              onClick={() => navigate("/catalogo")}
            >
              <h3>Encuentra el técnico</h3>
            </button>
          </div>
        </form>
      </div>

      <p className="disponibilidad">
        <i className="fa-solid fa-clock"></i> Disponibilidad 24/7
        <IoTimeSharp className="icon-reloj" />
      </p>
    </>
  );
};

export default SearchForm;