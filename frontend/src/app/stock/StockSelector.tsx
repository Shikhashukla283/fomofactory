// app/stock/StockSelector.tsx
'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSymbol } from '../../redux/stockSlice';

const StockSelector = () => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSymbol(event.target.value));
  };

  return (
    <div className='flex w-full p-3 items-center gap-3 justify-center'>
      <label htmlFor="stock-select">Select Stock/Crypto:</label>
      <select id="stock-select" className='border-2 border-gray-500 focus-visible:border-gray-500 rounded p-2' onChange={handleChange}>
        <option className='flex w-full p-2' value="bitcoin">Bitcoin (BTC)</option>
        <option value="ethereum">Ethereum (ETH)</option>
        <option value="dogecoin">Dogecoin (DOGE)</option>
        <option value="solana">Solana (SOL)</option>
        <option value="cardano">Cardano (ADA)</option>
      </select>
    </div>
  );
};

export default StockSelector;
