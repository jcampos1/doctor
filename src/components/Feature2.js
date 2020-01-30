import React from 'react'

const Feature2 = ({
    title,
    style,
    className = "text-muted",
    primaryColor = "#a1a1a1",
    secondaryColor = "#515151",
}) => {
    return (
        <div
            className={`py-4 d-inline-block`}>
            <h1 
                className={`mb-0 text-center font-weight-bold ${className}`}
                style={style}>{title}</h1>
            <div className="w-100">
                <div 
                    style={{backgroundColor: primaryColor, height: "4px", width: "40%"}}
                    className="d-inline-block" />
                <div 
                    style={{backgroundColor: secondaryColor, height: "4px", width: "60%"}}
                    className="d-inline-block" />
            </div>
        </div>
    )
}

export default Feature2;