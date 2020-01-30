import React from 'react'
import FormSection from './FormSection';

const Footer2 = () => {
    return (
        <div>
            {/* Form section */}
            <FormSection />
            <footer
                style={{backgroundColor: "#5a5a5a"}} 
                className="d-flex justify-content-between align-items-center px-3 px-md-5 py-1 w-100">
                <div 
                    style={{color: "white"}}
                    className="d-flex flex-column flex-md-row ml-0 ml-md-5">
                    <h5
                        className="ml-0 mr-5 d-block d-md-inline-block font-weight-bold mb-0">
                        2019
                    </h5>
                    <span
                        style={{opacity: ".8"}} 
                        className="d-block d-md-inline-block">
                        Desarrollado por <span className="font-weight-bold font-italic">Linktic</span> todos los derechos reservados
                    </span>
                </div>
                <img 
                    width="100"
                    className="img-fluid mr-0 mr-md-5"
                    src="/img/logo-linktic-desk.png" 
                    alt="logo linktic" />
            </footer>
        </div>
    )
}

export default Footer2;