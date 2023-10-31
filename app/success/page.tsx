import React from 'react'
import { POST } from '../api/printfulTest/route';
import { Product, StateProps } from '@/types/Product';
import { store } from '../../redux/store'
import TestButton from '@/components/TestButton';
import useServer from 'next/dynamic';



const SuccessPage = () => {

  const { shopping } = store.getState();
  const productData = shopping.productData;

  // const printfulOrderData = {
  //   recipient: {
  //     name: "Lawrence Brown",
  //     address1: "13818 Woodpecker Rd",
  //     city: "Victorville",
  //     country_name: "United States",
  //     state_name: "California",
  //     zip: "92394",
  //   },
  //   items: productData.map((item: Product) => [
  //     {
  //       quantity: item.quantity,
  //       variant_id: item.variant_id,
  //       external_product_id: item.external_product_id,
  //     }
  //   ]),
  // };

  // function handleApi() {
  //   "use server"
  //   POST(productData);
  // };


  // const handleApi = async () => {
  //   POST(productData);
  // };

  // useEffect(() => {
  //   handleApi();
  // }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h2>Your Payment Was Successful!</h2>
        {/* <TestButton handleApi={handleApi} /> */}
        {/* <button onClick={handleApi} className='border p-2 mt-3 uppercase'>Initiate Printful API</button> */}
      </div>
    </>
  );
};

export default SuccessPage;

