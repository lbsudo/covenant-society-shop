import { Product } from "../../../types/Product";

export async function GET() {
  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const url = `${API_URL}/store/products`;

  const res = await fetch(url, {
    method: "GET",
    next: { revalidate: 3500 },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const products: Product[] = await data.result;

  const batchSize = 10; // Number of products to fetch in each batch
  const productPromises = [];
  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize);
    const batchPromises = batch.map((product: Product) =>
      fetch(`${API_URL}/store/products/${product.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
    );
    productPromises.push(...batchPromises);
  }
  const productResponses = await Promise.all(productPromises);
  const productData = await Promise.all(productResponses.map((response) => response.json()));
  const productDetails = productData.map((response) => response.result);


  // const productPromises = products.map((product: Product) =>
  //   fetch(`${API_URL}/store/products/${product.id}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  // );
  // const productResponses = await Promise.all(productPromises);
  // const productData = await Promise.all(productResponses.map((response) => response.json()));
  // const productDetails = productData.map((response) => response.result);

  return productDetails;
}


