import React, { FC, ButtonHTMLAttributes } from 'react';
import './Style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button: FC<ButtonProps> = ({children, onClick}: ButtonProps) => {
    return (
        <button className='button' onClick={onClick}> {children} </button>
    )
}

export default Button;