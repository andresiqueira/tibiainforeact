import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import './App.css';

import Form from './Components/Form';
import Image from './Components/Image';
import Card from './Components/Card';
import Errors from './Components/Errors';
import { IApiShape } from './Hooks/useFetch';

import { handleInputValue } from './Helpers/Validators';

const App = () => {
  const [documentTitle, setDocumentTitle] = useState<string>('Tibia Info');
  const [error, setError] = useState<string | null>(null);
  const [characterData, setCharacterData] = useState<any>(null)

  const logo: string = 'tibia.gif';
  console.log('dados da api :', characterData)
  console.log('erro da api :', error)
  document.title = documentTitle

  useEffect(() => {
    characterData && setDocumentTitle(characterData.data.characters.character.name)
  }, [characterData])

  useEffect(() => {
    if (error) {
      setCharacterData(null)
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }
  }, [error])

  // const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   if (inputValue === "") {
  //     setError("Campo não pode estar vazio")

  //     setTimeout(() => {
  //       setError(null)
  //     }, 3000)
  //     return
  //   }

  //   if (!handleInputValue(inputValue)) {
  //     setError("Nome incompativel")
  //     setInputValue('')
  //     setTimeout(() => {
  //       setError(null)
  //     }, 3000)
  //     return
  //   }

  //   fetchData(inputValue)
  //   setInputValue('')
  // }

  return (
      <div className='App'>
        <Image src={logo} alt='Logo Tibia' width={200} height={150} />
        <h1>Tibia Character Information</h1>
        <Form data={setCharacterData} error={setError} />
        {error && (
          <Errors>{error}</Errors>
        )}
        {characterData && <Card data={characterData.data.characters.character} />}
      </div>
  );
}

export default App;