import React from 'react'
import ProductPage from "../../../components/product/ProductPage";
import { Product } from "@/types/Product";

interface pageProps {
  params: { id: string }
}

export default async function ProdPage({ params }: pageProps) {

  const fetchProduct = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
    const API_URL = 'https://api.printful.com';
    const url = `${API_URL}/store/products/${params.id}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const product: Product = data.result;
    return product;
  };

  // const getProduct = async () => {
  //   try {
  //     const product = await fetchProduct();
  //     return product;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  // const API_URL = 'https://api.printful.com';
  // const url = `${API_URL}/store/products/${params.id}`;
  // const res = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${API_KEY}`,
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }

  // const data = await res.json();
  // const product: Product = data.result;

  const product: Product = await fetchProduct();

  return (
    <>
      <ProductPage product={product} />
    </>
  )
}





