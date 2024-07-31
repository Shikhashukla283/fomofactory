// app/page.tsx
'use client'
import StockTable from './stock/page';
import StockSelector from './stock/StockSelector';

export default function Home() {
  return (
    <div className='p-3 h-screen w-screen'>
      <p className='text-5xl font-bold text-center bg-black text-white leading-[8rem]'>Fomo Factory</p>   
      <p className='text-2xl font-bold text-center'>Real Time Data Technical Assessment</p>
      <StockSelector />
      <StockTable />
    </div>
  );
}
