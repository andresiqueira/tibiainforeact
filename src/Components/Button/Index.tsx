import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    children: string;
    onClick?: any;
}

const Button: FC<ButtonProps> = ({children, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}> {children} </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;