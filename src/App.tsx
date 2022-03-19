import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Components/Input/Index';
import Form from './Components/Form/Index';
import Button from './Components/Button/Index';
import Image from './Components/Image/Index';
import DataGrid from './Components/DataGrid/Index';

const App: FC = () => {
  const [repository, setRepository] = useState<any>(null);
  const [input, setInput] = useState<string>('');
  const logo: string = 'https://tibiawiki.com.br/images/5/52/Tibia_Logo.png';
 
  useEffect(
    () => {
    const fetchData = async () => {
      await input && axios.get(`https://api.tibiadata.com/v2/characters/${input}.json`)
      .then((res)=> {
      setRepository(res);
      })
      .catch((err) => console.log(err));
    }
 
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    fetchData();
    return () => clearTimeout(timer)
  },[input]);
  
  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   console.log(repository)
  // }

  return (
    <div className='App'>
      <Image src={logo} alt='Logo Tibia' />
      <h1>Tibia Character Information</h1>
      <Form>
        <Input type='text' name='input' value={input} placeholder='Enter character name' onChange={
          (e: any) => setInput(e.target.value)
        }/>
      </Form>
      {!!repository && <DataGrid data={repository.data.characters.data}/>}
    </div>
  );
}

export default App;
