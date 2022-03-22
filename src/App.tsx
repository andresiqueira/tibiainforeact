import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Components/Input/Index';
import Form from './Components/Form/Index';
import Button from './Components/Button/Index';
import Image from './Components/Image/Index';
import DataGrid from './Components/DataGrid/Index';
import Errors from './Components/Errors/Index';
import { useForm } from 'react-hook-form';

const App: FC = () => {
  const [repository, setRepository] = useState<any>(null);
  const { register, handleSubmit ,watch, formState: { errors } } = useForm();
  const [input, setInput] = useState<string>('');
  const logo: string = 'https://tibiawiki.com.br/images/5/52/Tibia_Logo.png';
 
  console.log(watch('teste'));
  
  const fetchData = async () => {
      await input && axios.get(`https://api.tibiadata.com/v2/characters/${input}.json`)
      .then((res)=> {
        setRepository(res);
      })
      .catch((err) => console.log(err));
  }

  const onSubmit = (e: any) => {
    fetchData()
    setInput('')
  }

  return (
    <div className='App'>
      <Image src={logo} alt='Logo Tibia' />
      <h1>Tibia Character Information</h1>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="">Nome do personagem:</label>
        <input value={input} {...register('teste', { required: true, pattern: /[A-Za-z]/})} placeholder='Enter character name' onChange={
          async (e: any) => await setInput(e.target.value)
        }/>
        <Button>SEND</Button>
        { errors.teste && <Errors>preencha o campo</Errors> }
      </Form>
      {!!repository && <DataGrid data={repository.data.characters.data}/>}
    </div>
  );
}

export default App;
