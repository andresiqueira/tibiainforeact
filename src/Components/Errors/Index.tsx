import React, {FC, Children} from "react";
import PropTypes from "prop-types";
import './Style.css'

interface ErrorsProps {
    children: any;
}

const Errors: FC<ErrorsProps> = ({children}: ErrorsProps) => {
    return (
        <span className='error'>{children}</span>
    )
}


Errors.propTypes = {
    children: PropTypes.any
}

export default Errors;