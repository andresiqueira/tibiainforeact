import React, { InputHTMLAttributes } from 'react';
import type {  UseFormRegister } from 'react-hook-form';
import './Style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    register:  UseFormRegister<any>
}

const Input = ({label, register,  ...rest}: InputProps) => {
    return (
        <>
            <label className='label'>{label}</label>
            <input className='input' {...register(label)} {...rest}/>
        </>
    )
}

export default Input;