import React, { FC } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

interface FormProps {
    onSubmit?: any,
    children: any
}

const Form: FC<FormProps> = ({onSubmit, children}: FormProps) => {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.any.isRequired
}

export default Form;