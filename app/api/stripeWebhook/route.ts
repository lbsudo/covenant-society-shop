import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
// import Stripe from "stripe";


export const POST = async (request: NextRequest) => {

  try {
    const reqBody = await request.json();
    const { type, data } = reqBody;


    if (type === "checkout.session.completed") {
      const session = data.object;

      const orderString = session.metadata.items;
      const orderData = JSON.parse(orderString);

      const customer = session.customer_details;

      const printfulOrderData = {
        external_id: session.id,
        shipping: "STANDARD",
        recipient: {
          name: customer.address.name,
          address1: customer.address.line1,
          city: customer.address.city,
          state_code: customer.address.state,
          country_code: customer.address.country,
          zip: customer.address.postal_code,
          phone: customer.phone,
          email: session.email,
        },
        items: orderData.map((item: Product) => ({
          // variant_id: item.variant_id,
          quantity: item.quantity,
          external_variant_id: item.external_variant_id,
        })),
        needs_approval: true,

      }

      // Make a POST request to the Printful API
      const printfulResponse = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTFUL_API_KEY}`,
        },
        body: JSON.stringify(printfulOrderData),
      });

      const printfulOrder = await printfulResponse.json();

      if (printfulResponse.ok) {
        console.log("Printful Order Created:", printfulOrder);
      } else {
        console.error("Failed to create Printful order:", printfulOrder);
      }

      console.log("Checkout Session Completed:");
      return NextResponse.json({ message: "Webhook received successfully", orderData, printfulOrder });

    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

