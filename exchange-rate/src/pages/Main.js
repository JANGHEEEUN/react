import React, {useContext, useEffect,} from 'react';
import {ExchangeRateContext,} from '../contexts/ExchangeRateContext';
import {Link, } from 'react-router-dom';

function Main (props) {
    const exchangeRateContext = useContext(ExchangeRateContext);

    useEffect(() => {
        console.log('exchangeRateConntext.exchangeRate', exchangeRateContext.exchangeRate)
    }, [exchangeRateContext.exchangeRate]);

    return(
        <div>
            {exchangeRateContext.exchangeRate.map((currency, cI) => {
                return (
                    <div key={cI} >
                    <Link 
                    to={`/currency/${currency.cur_unit}`}
                    style={{width: '100%', margin: '10px 0', textDecoration: 'none', color: 'black'}}>
                        {currency.cur_nm} ({currency.cur_unit}): {currency.bkpr}
                    </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Main;