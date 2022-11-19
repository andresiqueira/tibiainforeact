import React, { useEffect, useState } from 'react';

import { Icon } from '@iconify/react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Input from '../Input';
import Button from '../Button';
import useFetch from '../../Hooks/useFetch';
import './Style.css';

const schema = yup.object({
    name: yup.string()
        .matches(/^[a-zA-Z\s]*$/, "É permitido somente letras")
        .required('Entre com um nome de personagem')
}).required()

const Form = ({ data, error }: any) => {
    const [isLoadin, setIsLoading] = useState<boolean>(false);

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

    useEffect(() => {
        if (errors.name) {
            error(errors.name.message)
        }
    }, [errors.name])

    const onSubmit: SubmitHandler<FieldValues> = characterData => {
        setIsLoading(true)
        setTimeout(() => { 
            fetchData(characterData.name)
            setIsLoading(false) 
        }, 1500)
        reset()
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="name"
                    register={register}
                />
                <Button>Procurar</Button>
                {isLoadin && <Icon style={{ width: "30px", height: "30px", top: "160px", position: "absolute" }} icon="eos-icons:loading" />}
            </form>
        </>
    )
}

export default Form;