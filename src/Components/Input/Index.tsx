import React, { InputHTMLAttributes } from 'react';
import './Style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({label,  ...rest}: InputProps) => {
    return (
        <>
            <label className='label'>{label}</label>
            <input className='input' {...rest}/>
        </>
    )
}

export default Input;