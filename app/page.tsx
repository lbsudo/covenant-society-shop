import React from 'react'
import getProducts from '@/actions/getProducts';
import productShuffle from '@/utils/productShuffle';
import ProductGrid from "@/components/product/ProductGrid";
import Hero from '../components/home/Hero'
import { Suspense } from 'react'

function PageFallback() {
  return <></>
}



export default async function Home() {
  const products = await getProducts();

  const productData = await productShuffle(products);
  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <section >
          <Hero />
        </section>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <ProductGrid products={productData} />
        </section>
      </Suspense>
    </>
  );
}
