import React from 'react'
import { GET } from '../api/allProducts/route'

export default async function page() {
  const productData = await GET();

  return (
    <pre>{JSON.stringify(productData, null, 2)}</pre>
  )
}
