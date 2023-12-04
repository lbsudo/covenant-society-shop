// import getCategory from "@/actions/getCategory";
import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";
import categoryFilter from "@/utils/categoryFilter";

export default async function Page() {


  // const categories = [
  //   108,
  // ]

  const ProductData = await generateStaticParams();

  // const ProductData = AllProducts.filter((product: Product) => {
  //   return product.sync_variants.some((variant) => variant.main_category_id === 108);
  // });

  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Tops</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}


export async function generateStaticParams() {
  const categories = [
    108,
  ]
  const ProductData = await getProducts();
  const Products = await categoryFilter(ProductData, categories)
  return Products;
}
