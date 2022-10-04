import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import './App.css';

import Input from './Components/Input';
import Form from './Components/Form';
import Button from './Components/Button';
import Image from './Components/Image';
import Card from './Components/Card';
import Errors from './Components/Errors';

import { handleInputValue } from './Helpers/Validators';

import useFetch, { IApiShape } from '././Hooks/useFetch'

const App = () => {
  const [repository, setRepository] = useState<IApiShape | null>(null)
  const [documentTitle, setDocumentTitle] = useState<string>('Tibia Info');
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const { responseData, fetchData, responseError } = useFetch()

  const logo: string = 'https://static.wikia.nocookie.net/tibia/images/d/d4/Bandit.gif/revision/latest/top-crop/width/360/height/360?cb=20180206145417&path-prefix=en';

  document.title = documentTitle

  useEffect(() => {
    responseData && setDocumentTitle(responseData.data.characters.character.name)
  }, [responseData])

  useEffect(() => {
    setRepository(responseData)
  }, [responseData])

  useEffect(() => {
    if (responseError) {
      setError(responseError)
      setRepository(null)
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }
  }, [responseError])

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputValue === "") {
      setError("Campo não pode estar vazio")

      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    if (!handleInputValue(inputValue)) {
      setError("Nome incompativel")
      setInputValue('')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    fetchData(inputValue)
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
          label="Nome do Personagem:"
          placeholder='Nome do personagem'
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value)
            }
          }
        />
        <Button>Procurar</Button>
        {error && (
          <Errors>{error}</Errors>
        )}
      </Form>
      {repository && <Card data={repository.data.characters.character} />}
    </div>
  );
}

export default App;