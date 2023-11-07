import Stripe from "stripe";
import { store, RootState } from '../../../redux/store';
import { NextRequest } from "next/server";
import { Product } from "@/types/Product";

export const POST = async (sessionId: any) => {

  const state: RootState = store.getState();
  const productData = state.shopping.productData;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const recipientAddress = session.shipping_details?.address;


  // const state: RootState = store.getState();
  // const productData = state.shopping.productData;

  // Construct the data for the Printful order
  const printfulOrderData = {
    recipient: {
      name: session.shipping_details?.name,
      phone: session.shipping_details?.phone,
      email: session.customer_email,
      address1: recipientAddress?.line1,
      city: recipientAddress?.city,
      country_name: recipientAddress?.country,
      state_name: recipientAddress?.state,
      zip: recipientAddress?.postal_code
    },
    items: productData.map((item: Product) => ({
      quantity: item.quantity,
      variant_id: item.sync_variant.variant_id,
      external_product_id: item.sync_variant.external_id,
    })),
  };



  // Make a POST request to the Printful API
  fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`
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
