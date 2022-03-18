import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Components/Input/Index';
import Form from './Components/Form/Index';
import Button from './Components/Button/Index';
import Image from './Components/Image/Index';
import DataGrid from './Components/DataGrid/Index';



function App() {
  const [repository, setRepository] = useState<any>([''])
  const [input, setInput] = useState<string>('')
  const logo: string = 'https://tibiawiki.com.br/images/5/52/Tibia_Logo.png'
 
  useEffect(() => {
    input && axios.get(`https://api.tibiadata.com/v2/characters/${input}.json`)
    .then((res)=> {
      setRepository(res)
    })
    .catch((err) => console.log(err)
    )
  },[input])
  console.log('antes: ',repository);
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(repository.data.characters.data)
  }

  return (
    <div className='App'>
      <Image src={logo} alt='Logo Tibia' />
      <h1>Tibia Character Information</h1>
      <Form onSubmit={handleSubmit}>
        <Input type='text' name='input' value={input} placeholder='Enter character name' onChange={
          (e: any) => setInput(e.target.value)
        }/>
        <Button type='submit'>Check</Button>
      </Form>
      <DataGrid/>
    </div>
  );
}

export default App;
