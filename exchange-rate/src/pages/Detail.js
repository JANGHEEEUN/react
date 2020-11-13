import React, {useContext, useEffect,useState} from 'react';
import {ExchangeRateContext,} from '../contexts/ExchangeRateContext';

function Detail(props) {
    const exchangeRateContext = useContext(ExchangeRateContext);
    const [currencyDetail, setCurrencyDetail] = useState([]);
    useEffect(() => {
        console.log('props.match.params.currencyCode: ',props.match.params.currencyCode)
        const currencyDetail = exchangeRateContext.getCurrencyDetailByUnit(props.match.params.currencyCode)
        console.log('currencyDetail: ', currencyDetail)
        setCurrencyDetail(currencyDetail)
    }, [exchangeRateContext.getCurrencyDetailByUnit,props.match.params.currencyCode]);
    return(
        <div>
            <table>
                <th>구분</th>
                <th>상세</th>
                <tr>    
                    <td>
                        조회결과
                    </td>
                    <td>
                        {currencyDetail.result}
                    </td>
                </tr>
                <tr>
                    <td>
                        통화코드
                    </td>
                    <td>
                        {currencyDetail.cur_unit}
                    </td>
                </tr>
                <tr>
                    <td>
                        통화 명
                    </td>
                    <td>
                        {currencyDetail.cur_nm}
                    </td>
                </tr>
                <tr>
                    <td>
                        통화코드
                    </td>
                    <td>
                        {currencyDetail.deal_bas_r}
                    </td>
                </tr>
                <tr>
                    <td>
                        조회결과
                    </td>
                    <td>
                        {currencyDetail.ten_dd_efee_r}
                    </td>
                </tr>
                <tr>
                    <td>
                        통화코드
                    </td>
                    <td>
                        {currencyDetail.ttb}
                    </td>
                </tr>
                <tr>
                    <td>
                        조회결과
                    </td>
                    <td>
                        {currencyDetail.tts}
                    </td>
                </tr>
                <tr>
                    <td>
                        통화코드
                    </td>
                    <td>
                        {currencyDetail.yy_efee_r}
                    </td>
                </tr>
            </table>
        </div>
    );
}
export default Detail;