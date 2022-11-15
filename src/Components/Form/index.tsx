import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from '../Input';
import Button from '../Button';
import useFetch, { IApiShape } from '../../Hooks/useFetch';
import './Style.css';

const Form = () => {
    const { register, handleSubmit } = useForm<FieldValues>();
    const { responseData, fetchData, responseError } = useFetch(process.env.REACT_APP_API_URL!)
    const [repository, setRepository] = useState<IApiShape | null>(null)

    useEffect(() => {
    setRepository(responseData)
    }, [responseData])

    const onSubmit: SubmitHandler<FieldValues> = data => {
        fetchData(data.name)
    }
    useEffect(() => {
        responseData && console.log(responseData)
    }, [responseData])

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