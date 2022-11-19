import React, { useState, useEffect } from 'react';

import './App.css';

import Form from './Components/Form';
import Image from './Components/Image';
import Card from './Components/Card';
import Errors from './Components/Errors';

const App = () => {
  const [error, setError] = useState<string | null>(null);
  const [characterData, setCharacterData] = useState<any>(null);

  document.title = "Tibia Info";

  const logo: string = 'tibia.gif';
  console.log('dados da api :', characterData)
  console.log('erro da api :', error)

  useEffect(() => {
    if (error) {
      setCharacterData(null)
      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }, [error])

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