import axios from "axios";
import { Product } from "@/types/Product";


export const POST = async (productData: any) => {

  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';

  // console.log(productData[0].id)

  // const orderItems = {
  //   items: productData.map((item: Product) => [
  //     {
  //       variant_id: item.variant_id
  //     }
  //   ])
  // }

  // orderItems.items.forEach((item: any) => {
  //   console.log(item[0].variant_id);
  // });


  // Construct the data for the Printful order
  const printfulOrderData = {
    recipient: {
      name: "Lawrence Brown",
      address1: "13818 Woodpecker Rd",
      city: "Victorville",
      country_name: "United States",
      state_name: "California",
      zip: "92394",
    },
    items: productData.map((item: Product) => ({
      quantity: item.quantity,
      variant_id: item.variant_id,
      external_product_id: item.external_product_id,
    })),
  };

  // Make a POST request to the Printful API
  axios.post(`${API_URL}/orders`, printfulOrderData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      'Access-Control-Allow-Methods': 'POST', // Allow specific HTTP methods
      'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allow specific headers
    },
  })
    .then(response => {
      // Handle the response from the Printful API
      console.log(response.data);
    })
    .catch(error => {
      // Handle any errors from the Printful API
      console.log(error);
    });
  // fetch(`${API_URL}/orders`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${API_KEY}`,
  //   },
  //   body: JSON.stringify(printfulOrderData)
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     // Handle the response from the Printful API
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     // Handle any errors from the Printful API
  //     console.log(error);
  //   });
};
