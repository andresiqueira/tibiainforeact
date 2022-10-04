import React, { FormEventHandler, FormHTMLAttributes, ReactNode } from 'react';
import './Style.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    onSubmit?: FormEventHandler;
    children: ReactNode;
}

const Form = ({onSubmit, children}: FormProps) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;