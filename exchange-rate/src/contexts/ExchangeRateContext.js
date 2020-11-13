import React, {createContext, useState, useEffect, useCallback} from 'react';

const ExchangeRateContextValue = {
    exchangeRateData: [],
    getCurrencyDetailByUnit: () => {},
    // setExchangeRateData: () => {},
};


export const authKey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';

export const ExchangeRateContext = createContext(ExchangeRateContextValue)

export function ExchangeRateContextProvider(props) {
    const [exchangeRate, setExchangeRate] = useState([]);
    useEffect(() => {
        fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authKey}&searchdate=${'2020-11-11'}&data=AP01`)
        .then(response=>{
          return response.json()
        })
        .then(responseJSON => {
          console.log('response: ', responseJSON);
          setExchangeRate(responseJSON);
        });
    
        // 함수 앞에 async를 붙여야됨
        // const response = await fetch('');
        // const responseJSON = await response.json()
      },[]);
    const getCurrencyDetailByUnit = useCallback(currencyCode=>{
        const matchedCurrency = exchangeRate.filter(currency => {
            return currency.cur_unit === currencyCode;
        })
        if(!matchedCurrency.length){
            return false;
        }
        return matchedCurrency[0];
    },[exchangeRate]);
    return(
        <ExchangeRateContext.Provider value={{
            exchangeRate,
            getCurrencyDetailByUnit,
            //setExchangeRate,
        }}>
            {props.children}
        </ExchangeRateContext.Provider>
    );
}