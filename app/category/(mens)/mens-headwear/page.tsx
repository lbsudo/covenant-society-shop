import getCategory from "@/actions/getCategory";
import categoryFilter from "@/utils/categoryFilter";
import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {

  // const categories = [
  //   15,
  //   45,
  // ]

  const ProductData = await generateStaticParams();


  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Sweatshirts</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}

export async function generateStaticParams() {
  const categories = [
    15,
    45,
  ]
  const ProductData = await getProducts();
  const Products = await categoryFilter(ProductData, categories)
  return Products;
}
