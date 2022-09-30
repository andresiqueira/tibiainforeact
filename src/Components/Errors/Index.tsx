import React from 'react';
import './Style.css'

interface ErrorsProps {
    children: string;
}

const Errors = ({children}: ErrorsProps) => {
    return (
        <span className='error'>{children}</span>
    )
}

export default Errors;