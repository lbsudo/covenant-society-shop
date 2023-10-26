import { Product } from "@/types/Product";
import { PrintfulClient } from 'printful-request';


export const POST = async (productData: any) => {

  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;

  const printful = new PrintfulClient(`${API_KEY}`);

  // const printfulOrderData = {
  //   recipient: {
  //     name: "Lawrence Brown",
  //     address1: "13818 Woodpecker Rd",
  //     city: "Victorville",
  //     country_name: "United States",
  //     state_name: "California",
  //     zip: "92394",
  //   },
  //   items: productData.map((item: Product) => ([
  //     {
  //       quantity: item.quantity,
  //       variant_id: item.variant_id,
  //       external_product_id: item.external_product_id,
  //     }
  //   ])),
  // };


  printful.post("orders", {
    recipient: {
      name: "Lawrence Brown",
      address1: "13818 Woodpecker Rd",
      city: "Victorville",
      country_name: "United States",
      state_name: "California",
      zip: "92394",
    },
    items: productData.map((item: Product) => ([
      {
        quantity: item.quantity,
        variant_id: item.variant_id,
        external_product_id: item.external_product_id,
      }
    ]))
  }).then(({ result }) => console.log(result));

  // printful.get("orders", printfulOrderData).then(({ result }) => console.log(result));

  // printfulOrderData.items.forEach((item: any) => {
  //   console.log(item);
  // });

  // Make the request to estimate the costs of the order

  // console.log(response.result);


  // Make a POST request to the Printful API
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
