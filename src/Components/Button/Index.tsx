import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    children: string;
}

const Button: FC<ButtonProps> = ({children}: ButtonProps) => {
    return (
        <button> {children} </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired
}

export default Button;