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
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    if (url) {
      inputData && axios.get(url + inputData, { cancelToken: source.token })
        .then((res) => {
          if (res.data.characters.character.name === '') {
            setResponseError('Personagem não existe');
            return
          }

          setResponseData(res);
        })
        .catch((err) => {
          axios.isCancel(err) ? console.log('Request canceled', err.message) : false
        });
    }
  }

  return { responseData, fetchData, responseError }
}

export default useFetch