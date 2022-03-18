import React, { Children } from "react";

const Button = ({type, children}:any) => {
    return (
        <button type={type}>{children}</button>
    )
}

export default Button;