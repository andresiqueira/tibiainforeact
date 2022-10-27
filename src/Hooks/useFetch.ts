import { useState } from "react";
import axios from 'axios';

export interface IChacarterShape {
  characters: {
    character: {
      name: string,
      level: string,
      vocation: string,
      sex: string,
      residence: string,
      world: string
    }
  }
}

export interface IApiShape {
  data: IChacarterShape
}

const useFetch = (url: string) => {
  const [responseData, setResponseData] = useState<IApiShape | null>(null);
  const [responseError, setResponseError] = useState<string | null>(null);

  const fetchData = async (inputData: string) => {
    if (url) {
      inputData && axios.get(url + inputData )
      .then((res) => {
        if (res.data.characters.character.name === '') {
          setResponseError('Personagem não existe');
          return
        }

        setResponseData(res);
      })
      .catch((err) => console.log(err));
    }
  }

  return { responseData, fetchData, responseError }
}

export default useFetch