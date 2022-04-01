import React, { useState, FC } from 'react';
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
  const [input, setInput] = useState<string>('');
  const logo: string = 'https://tibiawiki.com.br/images/5/52/Tibia_Logo.png';

  const fetchData = async () => {
    await input && axios.get(`https://api.tibiadata.com/v2/characters/${input}.json`)
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

  const onSubmit = (e: any) => {
    e.preventDefault()

    if (input === "") {
      setError("Campo nao pode estar vazio!")

      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    if (!handleInputValue(input)) {
      setError("Nome incompativel")
      setInput('')
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    fetchData()
    setInput('')
  }

  return (
    <div className='App'>
      <Image src={logo} alt='Logo Tibia' />
      <h1>Tibia Character Information</h1>
      <Form onSubmit={onSubmit} >
        <Input
          value={input}
          type="text"
          name="name"
          label="Nome do Personagem: "
          placeholder='Enter character name'
          onChange={
            (e: any) => setInput(e.target.value)
          }
        />
        <Button>SEND</Button>
        {error && (
            <Errors>{error}</Errors>
        )}
      </Form>
      {!!repository && <DataGrid data={repository.data.characters.data} />}
    </div>
  );
}
export default App;