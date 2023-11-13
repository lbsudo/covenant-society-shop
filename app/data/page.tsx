import React from 'react'
// import GET from '../api/allProducts/route'
import getProducts from '@/lib/getProducts';

export default async function page() {
  const productData = await getProducts();

  return (
    <pre>{JSON.stringify(productData, null, 2)}</pre>
  )
}
