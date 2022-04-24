import React, { FC, FormEventHandler, ReactNode } from 'react';
import './Style.css';

interface FormProps {
    onSubmit?: FormEventHandler;
    children: ReactNode;
}

const Form: FC<FormProps> = ({onSubmit, children}: FormProps) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;