import React, {FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: any;
}

const Input: FC<InputProps> = ({type, value, name, placeholder, onChange}) => {
    return (
        <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
    )
}

export default Input;