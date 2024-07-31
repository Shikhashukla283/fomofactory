// app/stock/page.tsx
'use client';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setData } from '../../redux/stockSlice';
import axios from 'axios';

const StockTable = () => {
  const dispatch = useAppDispatch();
  const { symbol, data } = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/data/${symbol}`);
        dispatch(setData(response.data));
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, [symbol, dispatch]);

  return (
    <div>
      <p className='text-xl text-center'>Showing Real Time Data for {symbol}</p>
      <table>
        <thead className='shadow-lg'>
          <tr>
            <th className='rounded-tl-lg border'>Price (USD)</th>
            <th className='rounded-tr-lg border'>Timestamp</th>
          </tr>
        </thead>
        <tbody className='shadow-lg'>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.price} $</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
