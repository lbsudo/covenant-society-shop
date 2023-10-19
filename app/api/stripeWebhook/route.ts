import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-08-16",
    });

    const reqBody = await request.json();
    const { type, data } = reqBody;

    if (type === "payment_intent.succeeded") {
      const paymentIntent = data.object;

      // Perform necessary actions when payment intent is succeeded
      // For example, update your database, send a confirmation email, or fulfill the order
      console.log("Payment intent succeeded:", paymentIntent);

      const recipientAddress = paymentIntent.charges.data[0].billing_details.address;

      // Extract the line items from the payment intent
      const lineItems = paymentIntent.charges.data[0].billing_details.line_items;

      // Map the line items to the format expected by the Printful API
      const items = lineItems.map((item: Product) => ({
        quantity: item.quantity,
        variant_id: item.sync_variant.variant_id,
        external_variant_id: item.sync_variant.external_id,
      }));

      // Make a request to the Printful API to create an order
      const response = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_PRINTFUL_API_KEY",
        },
        body: JSON.stringify({
          external_id: lineItems.external_id,
          recipient: {
            name: recipientAddress?.name,
            address1: recipientAddress?.address?.line1,
            city: recipientAddress?.address?.city,
            state_name: recipientAddress?.address?.state,
            country_name: recipientAddress?.address?.country,
            zip: recipientAddress?.address?.postal_code,
            phone: recipientAddress?.phone,
            email: recipientAddress?.email,
          },
          items: items
        }),
      });

      const responseData = await response.json();
      console.log("Printful order created:", responseData);
    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

