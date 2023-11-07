"use client"
import React from 'react'
// import { useEffect } from 'react';
// import { POST } from '../api/printfulTest/route'
// import { Product, StateProps } from '@/types/Product';
// import { store } from '../../redux/store'
// import TestButton from '@/components/TestButton';
// import useServer from 'next/dynamic';

const SuccessPage = () => {


  // const { shopping } = store.getState();
  // const productData = shopping.productData;

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  const handleApi = async () => {
    const body = {
      orderId: 100,
      productId: 623953983573,
      variantId: 1300,
      quantity: 1,
      fullName: "John Doe",
      company: "ABC Company",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      country: "United States",
      stateProvincePrefecture: "California",
      city: "Los Angeles",
      postalZipCode: 90001,
      phone: "123-456-7890",
    }
    await fetch('/api/addOrderData', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  };


  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h2>Your Payment Was Successful!</h2>
        {/* <TestButton handleApi={handleApi} /> */}
        <button onClick={handleApi} className='border p-2 mt-3 uppercase'>Initiate Printful API</button>
      </div>
    </>
  );
};

export default SuccessPage;

