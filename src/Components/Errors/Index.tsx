import React, {FC, Children} from "react";
import './Style.css'

interface ErrorsProps {
    children: string;
}

const Errors: FC<ErrorsProps> = ({children}: ErrorsProps) => {
    return (
        <span className='error'>{children}</span>
    )
}

export default Errors;