import { Product } from "@/types/Product";
export default async function categoryFilter(products: any, mainCategoryIds: number[]) {
  // const filteredProductDetails = products.filter((product: Product) => {
  //   return product.sync_variants.filter((variant) => mainCategoryIds.includes(variant.main_category_id));
  //   // return product.sync_variants.some((variant) => mainCategoryIds.includes(variant.main_category_id));
  // });

  return await products.filter((product: Product) => {
    return product.sync_variants.filter((variant) => mainCategoryIds.includes(variant.main_category_id));
    // return product.sync_variants.some((variant) => mainCategoryIds.includes(variant.main_category_id));
  });

}
