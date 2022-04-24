import React, { FC, InputHTMLAttributes} from 'react';
import './Style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: FC<InputProps> = ({type, value, name, label, placeholder, onChange}: InputProps) => {
    return (
        <>
            <label className='label'>{label}</label>
            <input className='input' type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}

export default Input;