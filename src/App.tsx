import React, { useState, FC, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Components/Input/Index';
import Form from './Components/Form/Index';
import Button from './Components/Button/Index';
import Image from './Components/Image/Index';
import DataGrid from './Components/DataGrid/Index';
import Errors from './Components/Errors/Index';
import { handleInputValue } from './Helpers/Validators';

const App: FC = () => {
  const [repository, setRepository] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const logo: string = 'https://tibiawiki.com.br/images/5/52/Tibia_Logo.png';

  const fetchData = async () => {
    await inputValue && axios.get(`${process.env.REACT_APP_API_URL}${inputValue}.json`)
      .then((res) => {
        if (res.data.characters.error) {
          setError('Personagem não existe');
          setTimeout(()=>{
            setError('')
          },3000)
          return
        }
        setRepository(res);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (inputValue === "") {
      setError("Campo nao pode estar vazio!")

      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    if (!handleInputValue(inputValue)) {
      setError("Nome incompativel")
      setInputValue('')
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    fetchData()
    setInputValue('')
  }

  return (
    <div className='App'>
      <Image src={logo} alt='Logo Tibia' />
      <h1>Tibia Character Information</h1>
      <Form onSubmit={handleSubmit} >
        <Input
          value={inputValue}
          type="text"
          name="name"
          label="Nome do Personagem: "
          placeholder='Enter character name'
          onChange={
            (e: any) => setInputValue(e.target.value)
          }
        />
        <Button>Search</Button>
        {error && (
            <Errors>{error}</Errors>
        )}
      </Form>
      {!!repository && <DataGrid data={repository.data.characters.data} />}
    </div>
  );
}
export default App;