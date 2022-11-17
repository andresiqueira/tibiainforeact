import React, { useEffect } from 'react';

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Input from '../Input';
import Button from '../Button';
import useFetch from '../../Hooks/useFetch';
import './Style.css';

const schema = yup.object({
    name: yup.string().matches(/^[a-zA-Z\s]*$/, "É permitido somente letras").required('Entre com um nome de personagem')
}).required()

const Form = ({ data, error }: any) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FieldValues>({
        resolver: yupResolver(schema)
    });
    const { responseData, fetchData, responseError } = useFetch(process.env.REACT_APP_API_URL!)

    useEffect(() => {
        data(responseData)
    }, [responseData])

    useEffect(() => {
        error(responseError)
    }, [responseError])

    const onSubmit: SubmitHandler<FieldValues> = characterData => {
        fetchData(characterData.name)
        reset()
    }
    console.log(errors.name)
    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="name"
                register={register}
            />
            <Button>Procurar</Button>
        </form>
    )
}

export default Form;