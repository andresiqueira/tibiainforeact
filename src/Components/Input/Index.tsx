import React, { FC, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: any;
    label: string;
}

const Input: FC<InputProps> = ({type, value, name, label, placeholder, onChange}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input className='input' type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default Input;