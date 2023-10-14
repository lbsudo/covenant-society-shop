import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { GET } from './api/allProducts/route'
import ProductGrid from "@/components/product/ProductGrid";

export default async function Home() {
  const productData = await GET();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ProductGrid products={productData} />
    </section>
  );
}
