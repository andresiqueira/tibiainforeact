import React from "react";

const Form = ({onSubmit, children}: any) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;