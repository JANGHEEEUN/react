import React, { useEffect, useState, } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import RootRouter from './routers/RootRouter';

import { ExchangeRateContextProvider, } from './contexts/ExchangeRateContext';


const certKey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';

function App() {
  const [data, setData] = useState([]);

  // useEffect(()=> {
  //   fetch(
  //     `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${certKey}&searchdate=${'2020-11-11'}&data=${'AP01'}`
  //   ).then(
  //     response => {
  //       return response.json()
  //     }
  //   ).then(
  //     responseJSON => {
  //       console.log('responseJson: ', responseJSON);
  //       setData(responseJSON);
  //     }
  //   )

  // },[]);

  // useEffect(() => {
  //   console.log('data: ', data);
  // },[data]);

  return (
    <ExchangeRateContextProvider>
      <BrowserRouter>
      <RootRouter></RootRouter>
      </BrowserRouter>
    </ExchangeRateContextProvider>
  );
}

export default App;
