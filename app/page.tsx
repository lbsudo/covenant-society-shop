import React from 'react'
import { GET } from "./api/allProducts/route";
import ProductGrid from "@/components/product/ProductGrid";
import Hero from '../components/home/Hero'



export default async function Home() {
  const productData = await GET();
  return (
    <>
      <section >
        <Hero />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ProductGrid products={productData} />
      </section>
    </>
  );
}


