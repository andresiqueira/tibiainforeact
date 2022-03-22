import React, {FC, Children} from "react";
import PropTypes from "prop-types";

interface ErrorsProps {
    children: any;
}

const Errors: FC<ErrorsProps> = ({children}: ErrorsProps) => {
    return (
        <span>{children}</span>
    )
}


Errors.propTypes = {
    children: PropTypes.any
}

export default Errors;