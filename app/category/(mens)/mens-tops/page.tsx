import { GET } from "../../../api/allProducts/route";
import { Product } from "@/types/Product";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {

  const AllProducts = await GET();

  const ProductData = AllProducts.filter((product: Product) => {
    return product.sync_variants.some((variant) => variant.main_category_id === 108);
  });

  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Tops</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}
