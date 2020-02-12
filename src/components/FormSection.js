import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Feature2 from './Feature2';
import * as Yup from "yup";
import axios from 'axios';

const schema = Yup.object().shape({
    firstname: Yup
        .string()
        .required("Este campo es requerido."),
    email: Yup
        .string()
        .email("Este campo debe ser un email.")
        .required("Este campo es requerido."),
    phone: Yup
        .string()
        .min(6, "Este campo es inválido")
        .required("Este campo es requerido.")
  });

const procedures = [{
    value: "Mamoplastia",
    label: "Mamoplastia"
}, {
    value: "Rinoplastia",
    label: "Rinoplastia"
}, {
    value: "Bichetmomia",
    label: "Bichetmomia"
}, {
    value: "Gluteoplastia",
    label: "Gluteoplastia"
}, {
    value: "Liposucción",
    label: "Liposucción"
}, {
    value: "Reconstrucción",
    label: "Reconstrucción"
}, {
    value: "Tratamientos no quirúrgicos",
    label: "Tratamientos no quirúrgicos"
}, {
    value: "Otros",
    label: "Otros"
}];


const FormSection = ({
    title
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {firstname: "", phone: "", email: "", terms: false,};

    const handleSubmit = (obj, resetForm) => {
        const _obj = {
            ...obj
        }
        delete _obj.terms;
        setIsLoading(true);
        let fields = Object.keys(_obj).map(key => ({name: key, value: obj[key]}));

        const data = {
            fields, 
            context: {
                pageUri: "https://stupefied-dubinsky-0c0195.netlify.com",
                pageName: "Lanzamiento",
            },
            skipValidation: false
        }
        
        axios.post('https://api.hsforms.com/submissions/v3/integration/submit/7149988/7846c847-ac87-46a3-a824-10403b6752b5', data)
          .then(function (response) {
            alert('¡Gracias por contactarnos! \n Pronto estaremos en contacto.');
            resetForm(initialValues)
            setIsLoading(false);
          })
          .catch(function (error) {
            setIsLoading(false);
          });
    }

    return (
        <>
            {/* Displayed in desk */}
            <section
                // style={{
                //     backgroundImage: "url(/img/bg-form.png)",
                //     backgroundRepeat: "none",
                // }}
                id="form" 
                className="container-fluid m-0 px-0 py-5 bg-light position-relative">
                <img 
                    style={{
                        top: "0", 
                        left: "0"
                    }}
                    src="/img/bg-form.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute d-none d-md-block"
                />
                <img 
                    style={{
                        top: "0", 
                        left: "0"
                    }}
                    src="/img/bg-form.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute d-block d-md-none"
                    />
                <div
                    className="container position-relative">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 
                            className="" 
                            primaryColor="white"
                            title={title} />
                    </div>
                    <div
                        style={{zIndex: "100"}} 
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        {/* CONTACTS */}
                        <div className="h-100 order-2 order-md-1 mt-3 mt-md-0">
                            {/* email */}
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/correo.png" 
                                alt="email card"
                                className="img-fluid d-none d-md-block" />
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/correo-mobile.png" 
                                alt="email card"
                                className="img-fluid d-block d-md-none" />
                            {/* phone */}
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/phone.png" 
                                alt="phone card"
                                className="img-fluid d-none d-md-block mt-3 mt-md-4" />
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/phone-mobile.png" 
                                alt="phone card"
                                className="img-fluid d-block d-md-none mt-3 mt-md-4" />
                            {/* address */}
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/address.png" 
                                alt="address card"
                                className="img-fluid d-none d-md-block mt-3 mt-md-4" />
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/address-mobile.png" 
                                alt="address card"
                                className="img-fluid d-block d-md-none mt-3 mt-md-4" />
                        </div>
                        {/* FORM */}
                        <div className="order-1 order-md-2">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={() => null}>
                                {({ 
                                    values,
                                    errors, 
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    setFieldValue, 
                                    setFieldTouched,
                                    resetForm,
                                    isValid
                                }) => (
                                    <div className="container-form bg-white">
                                        <Form className="form-hubspot px-3 py-5">
                                            {/* NAME FIELD */}
                                            <div className="form-group">
                                                <label> 
                                                    Nombres y apellido.
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    name="firstname"
                                                    placeholder="Ingrese su nombre y apellidos completos."
                                                />
                                                {errors.firstname && touched.firstname && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.firstname}
                                                    </div>
                                                )}
                                            </div>
                                            {/* EMAIL FIELD */}
                                            <div className="form-group mt-4">
                                                <label> 
                                                    Correo electrónico.
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Ingrese su correo electrónico."
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                            {/* PHONE FIELD */}
                                            <div className="form-group mt-4">
                                                <label> 
                                                    Teléfono.
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Ingrese su número de contacto."
                                                />
                                                {errors.phone && touched.phone && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                            {/* PROCEDURE TYPE */}
                                            <div className="form-group mt-3">
                                                <label> 
                                                    Tipo de procedimiento.
                                                </label>
                                                <select
                                                    className="form-control"
                                                    name="tipo_de_procedimiento"
                                                    value={values.tipo_de_procedimiento}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ display: 'block' }}
                                                    >
                                                    <option
                                                        disabled={true} 
                                                        value="" 
                                                        label="Tipo de procedimiento." />
                                                    {
                                                        procedures.map((proc, index) => (
                                                            <option 
                                                                key={`proc${index}`}
                                                                value={proc.value} 
                                                                label={proc.label} />
                                                        ))
                                                    }
                                                </select>
                                                {errors.procedure && touched.procedure && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.procedure}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group mt-4">
                                                <div className="form-check">
                                                    <Field
                                                        name="terms"
                                                        render={({ field, form }) => {
                                                        return (
                                                            <>
                                                                <input 
                                                                    className="form-check-input" 
                                                                    type="checkbox" 
                                                                    id="autoSizingCheck2"
                                                                    checked={field.value}
                                                                    {...field} />
                                                                <label 
                                                                    style={{opacity: ".4"}}
                                                                    className="form-check-label" 
                                                                    for="autoSizingCheck2">
                                                                    Términos y condiciones.
                                                                </label>
                                                            </>
                                                        );
                                                    }}/>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleSubmit(values, resetForm)} 
                                                disabled={!isValid || !values.terms}
                                                style={{
                                                    backgroundColor: "#957bcc",
                                                    opacity: !isValid ? ".7" : "1"
                                                }}
                                                type="submit" 
                                                className="btn px-4 mt-2 d-flex mx-auto text-white font-weight-bold">
                                                {
                                                    isLoading ? (
                                                        <>Enviando solicitud...</>
                                                    ) : (
                                                        <>Solicitar información</>
                                                    )
                                                }
                                            </button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

FormSection.defaultProps = {
    title: "SOLICITAR INFORMACIÓN"
}
export default FormSection;