import React, { ButtonHTMLAttributes } from 'react';
import './Style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button= ({children, ...rest}: ButtonProps) => {
    return (
        <button className='button' {...rest}> {children} </button>
    )
}

export default Button;