import { Product } from "@/types/Product";

export const POST = async (printfulOrderData: any) => {

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
  // const printfulOrderData = {
  //   recipient: {
  //     name: "Lawrence Brown",
  //     address1: "13818 Woodpecker Rd",
  //     city: "Victorville",
  //     country_name: "United States",
  //     state_name: "California",
  //     zip: "92394",
  //   },
  //   items: productData.map((item: Product) => [
  //     {
  //       quantity: item.quantity,
  //       variant_id: item.variant_id,
  //       external_product_id: item.external_product_id,
  //     }
  //   ]),
  // };

  // Make a POST request to the Printful API
  fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(printfulOrderData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the Printful API
      console.log(data);
    })
    .catch(error => {
      // Handle any errors from the Printful API
      console.log(error);
    });
};
