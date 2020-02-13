import React from 'react'
import showdown from 'showdown';

const converter = new showdown.Converter()

const Title = ({
    title
}) => {
    return (
        <div
            className={`p3-4`}>
            <h5 
                className={`mb-0 text-center text-uppercase font-weight-bold text-muted text-center`}>
                {title}
            </h5>
            <div className="w-75 mx-auto">
                <div 
                    style={{backgroundColor: "#847782", height: "4px", width: "40%"}}
                    className="d-inline-block" />
                <div 
                    style={{backgroundColor: "#957bcc", height: "4px", width: "60%"}}
                    className="d-inline-block" />
            </div>
        </div>
    )
}

const ItemCard = ({
    image,
    alt,
    title,
    resume
}) => {
    return (
        <>
            {/* DESKTOP */}
            <div 
                style={{borderRadius: "15px"}}
                className="d-none d-md-block bg-light py-4 px-3 h-100">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                        <img 
                            src={image}
                            alt={alt}
                            className="img-fluid w-75 d-flex mx-auto mb-4" />
                    </div>
                    <div className="col-md-9">
                        <Title 
                            title={title} />
                        <div
                            style={{fontSize: "14px"}} 
                            className="text-muted mt-4"
                            dangerouslySetInnerHTML={{ __html: converter.makeHtml(resume) }} />
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div className="d-block d-md-none bg-light py-4 px-3 h-100">
                <img 
                    src={image}
                    alt={alt}
                    className="img-fluid w-75 d-flex mx-auto mb-4" />
                <Title 
                    title={title} />
                <p 
                    style={{fontSize: "14px"}}
                    className="text-muted mt-4">
                    {resume}
                </p>
            </div>
        </>
    )
}

export default ItemCard;