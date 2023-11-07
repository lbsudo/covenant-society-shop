import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import createOrder from "@/lib/createOrder"


export const POST = async (request: NextRequest) => {
  // const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;


  try {
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    //   apiVersion: "2023-08-16",
    // });

    const reqBody = await request.json();
    const { type, data } = reqBody;


    if (type === "checkout.session.completed") {
      const session = data.object;

      const customer = session.customer_details;

      const customerName = customer.address.name;
      const customerLine1 = customer.address.line1;
      const customerLine2 = customer.address.line2;
      const customerCity = customer.address.city;
      const customerState = customer.address.state;
      const customerCountry = customer.address.country;
      const customerZip = customer.address.postal_code;
      const customerPhone = customer.phone;
      const customerEmail = customer.email;


      // const recipientInfo = session?.shipping_details

      // const testData = {
      //   id: 1,
      //   orderId: 101,
      //   productId: 6333747343983573,
      //   variantId: 1500,
      //   quantity: 2,
      //   fullName: recipientInfo.name,
      //   company: "",
      //   addressLine1: recipientInfo.line1,
      //   addressLine2: recipientInfo.line2,
      //   country: recipientInfo.country,
      //   stateProvincePrefecture: recipientInfo.state,
      //   city: recipientInfo.city,
      //   postalZipCode: recipientInfo.postal_code,
      //   phone: recipientInfo.phone,
      // }


      // const order = await createOrder(testData);
      // const userTest = {
      //   name: recipientInfo.name,
      //   // const company :recipientInfo.name,
      //   address1: recipientInfo.line1,
      //   address2: recipientInfo?.line2,
      //   city: recipientInfo.city,
      //   state_name: recipientInfo.state,
      //   country_name: recipientInfo.country,
      //   zip: recipientInfo.postal_code,
      //   phone: recipientInfo.email,
      //   email: recipientInfo.phone,

      // }

      // const name = recipientInfo.name;
      // // const company = recipientInfo.name;
      // const address1 = recipientInfo.line1;
      // const address2 = recipientInfo?.line2;
      // const city = recipientInfo.city;
      // const state_name = recipientInfo.state;
      // const country_name = recipientInfo.country;
      // const zip = recipientInfo.postal_code;
      // const phone = recipientInfo.email;
      // const email = recipientInfo.phone;

      //     name: session.shipping_details?.name,
      //     phone: session.shipping_details?.phone,
      //     email: session.customer_email,
      //     address1: recipientAddress?.line1,
      //     city: recipientAddress?.city,
      //     country_name: recipientAddress?.country,
      //     state_name: recipientAddress?.state,
      //     zip: recipientAddress?.postal_code

      // Construct the data for the Printful order
      // const printfulOrderData = {
      //   recipient: {
      //   },
      //   items: items.map((item: Product) => ([
      //     {
      //       quantity: item.quantity,
      //       variant_id: item.sync_variant.variant_id,
      //       external_variant_id: item.sync_variant.external_id,
      //     }
      //   ])),
      // };


      console.log("Checkout Session Completed:");
      // return new Response(JSON.stringify(order), {
      //   status: 200
      // })

    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

