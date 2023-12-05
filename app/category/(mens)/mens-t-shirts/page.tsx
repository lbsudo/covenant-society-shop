import categoryFilter from "@/utils/categoryFilter";
import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";
import { Suspense } from 'react'
import { Product } from "@/types/Product";

function PageFallback() {
  return <></>
}

export default async function Page() {

  const Products: Product[] = await generateStaticParams();

  // const categories = [
  //   6,
  //   26,
  // ]
  // const ProductData: Product[] = await getProducts();
  // const Products: Product[] = ProductData.filter((product: Product) => {
  //   return product.sync_variants.some((variant) => categories.includes(variant.main_category_id));
  // });
  // const Products: Product[] = await categoryFilter(ProductData, categories)

  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <div>
          <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens T-Shirts</h1>
          <ProductGrid products={Products} />
        </div>
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const categories = [
    6,
    26,
  ]
  const ProductData: Product[] = await getProducts();
  const Products: Product[] = ProductData.filter((product: Product) => {
    return product.sync_variants.some((variant) => categories.includes(variant.main_category_id));
  });
  // const ProductData = await getProducts();
  // const Products = await categoryFilter(ProductData, categories)
  return Products;
}
