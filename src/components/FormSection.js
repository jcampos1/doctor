import React from 'react';
import { Formik, Field, Form } from 'formik';
import Feature2 from './Feature2';
import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup
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
    const handleSubmit = data => {
        console.log('data :', data);
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
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/email-card.png" 
                                alt="email card"
                                className="img-fluid d-block" />
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/phone-card.png" 
                                alt="phone card"
                                className="img-fluid d-block mt-3 mt-md-4" />
                            <img 
                                style={{height: "140px", width: "400px"}}
                                src="/img/address-card.png" 
                                alt="address card"
                                className="img-fluid d-block mt-3 mt-md-4" />
                        </div>
                        {/* FORM */}
                        <div className="order-1 order-md-2">
                            <Formik
                                initialValues={{
                                    name: "",
                                    terms: false,
                                    email: "",
                                    phone: ""
                                }}
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
                                                    name="name"
                                                    placeholder="Ingrese su nombre y apellidos completos."
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.name}
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
                                                    name="procedure"
                                                    value={values.procedure}
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
                                                onClick={() => handleSubmit(values)} 
                                                disabled={!isValid || !values.terms}
                                                style={{backgroundColor: "#957bcc"}}
                                                type="submit" 
                                                className="btn px-4 mt-2 d-flex mx-auto text-white font-weight-bold">
                                                Solicitar información
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