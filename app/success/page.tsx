'use client'
import React from 'react'
import { POST } from '../api/printfulTest/route';


const SuccessPage = () => {

  const handleApi = () => {
    POST();
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h2>Your Payment Was Successful!</h2>
        <button onClick={handleApi} className='border p-2 mt-3 uppercase'>Initiate Printful API</button>
      </div>
    </>
  );
};

export default SuccessPage;

