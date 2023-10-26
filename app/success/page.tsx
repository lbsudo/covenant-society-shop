'use client'
import React, { useEffect } from 'react'
import { POST } from '../api/printfulTest/route';
import { useSelector, useDispatch } from 'react-redux';
import { Product, StateProps } from '@/types/Product';


const SuccessPage = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const printfulOrderData = {
    recipient: {
      name: "Lawrence Brown",
      address1: "13818 Woodpecker Rd",
      city: "Victorville",
      country_name: "United States",
      state_name: "California",
      zip: "92394",
    },
    items: productData.map((item: Product) => [
      {
        quantity: item.quantity,
        variant_id: item.variant_id,
        external_product_id: item.external_product_id,
      }
    ]),
  };

  const handleApi = () => {
    POST(printfulOrderData);
  };

  // useEffect(() => {
  //   handleApi();
  // }, []);

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

