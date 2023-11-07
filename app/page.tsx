import GET from './api/allProducts/route'
import ProductGrid from "@/components/product/ProductGrid";

export default async function Home() {
  const productData = await GET();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ProductGrid products={productData} />
    </section>
  );
}
