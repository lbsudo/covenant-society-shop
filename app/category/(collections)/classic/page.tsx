import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/Product";
import { Suspense } from 'react'

function PageFallback() {
  return <></>
}


export default async function Page() {

  const ProductData: Product[] = await getProducts();

  const Products: Product[] = ProductData.filter(product => product.sync_product.name.toLowerCase().includes('classic'));


  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <div>
          <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Sweatshirts</h1>
          <ProductGrid products={Products} />
        </div>
      </Suspense>
    </>
  );
}

// export async function generateStaticParams() {
//   const ProductData: Product[] = await getProducts();

//   const Products = ProductData.filter(product => product.sync_product.name.toLowerCase().includes('classic'));
//   return Products;
// }
