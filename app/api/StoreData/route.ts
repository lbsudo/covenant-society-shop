import { Product } from "../../../types/Product";

export async function GET() {
  const Lim = 40;
  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const url = `${API_URL}/store/products?limit=${Lim}`;

  const res = await fetch(url, {
    method: "GET",
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

  // return productDetails;

  const url2 = `${API_URL}/stores/${10183355}`;

  const res2 = await fetch(url2, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (!res2.ok) {
    throw new Error('Failed to fetch data');
  }

  const data2 = await res2.json();

  const url3 = `${API_URL}/categories`;

  const res3 = await fetch(url3, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (!res3.ok) {
    throw new Error('Failed to fetch data');
  }

  const data3 = await res3.json();

  return {
    data2,
    productDetails,
    data3,
  };
}

