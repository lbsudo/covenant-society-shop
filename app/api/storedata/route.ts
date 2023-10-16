import { Product } from "@/types/Product";
export async function GET() {
  const Lim = 40;
  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const storeUrl = `${API_URL}/stores/${10183355}`;
  const productUrl = `${API_URL}/store/products?limit=${Lim}`;
  const categoryUrl = `${API_URL}/categories`;

  const categoryRes = await fetch(categoryUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (!categoryRes.ok) {
    throw new Error('Failed to fetch data');
  }


  const categoryInfo = await categoryRes.json();

  const storeRes = await fetch(storeUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (!storeRes.ok) {
    throw new Error('Failed to fetch data');
  }
  const storeInfo = await storeRes.json();

  const productRes = await fetch(productUrl, {
    next: {
      revalidate: 5
      ,
    },
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!productRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await productRes.json();
  const products: Product[] = data.result;
  const productPromises = products.map((product: any) =>
    fetch(`${API_URL}/store/products/${product.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  );
  const productResponses = await Promise.all(productPromises);
  const productData = await Promise.all(productResponses.map((response) => response.json()));
  const productDetails = productData.map((response) => response.result);

  const productInfo = productDetails;

  return { storeInfo, productInfo, categoryInfo }

};
