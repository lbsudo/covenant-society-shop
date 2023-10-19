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

      const paymentIntentData = await stripe.paymentIntents.retrieve(paymentIntent);

      const lineItems = paymentIntent.charges.data[0].payment_method_details.billing_details.line1;


      // Perform necessary actions when payment intent is succeeded
      // For example, update your database, send a confirmation email, or fulfill the order
      console.log("Payment intent succeeded:", paymentIntent);

      // Make a request to the Printful API to create an order
      const response = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_PRINTFUL_API_KEY",
        },
        body: JSON.stringify({
          recipient: {
            name: paymentIntentData.shipping?.name,
            address1: paymentIntentData.shipping?.address?.line1,
            city: paymentIntentData.shipping?.address?.city,
            state_name: paymentIntentData.shipping?.address?.state,
            country_name: paymentIntentData.shipping?.address?.country,
            zip: paymentIntentData.shipping?.address?.postal_code,
            email: paymentIntentData.receipt_email,
          },
          items: lineItems.map((item: Product) => ({
            quanity: item.quantity,
            variant_id: item.sync_variant.variant_id,
            external_variant_id: item.sync_variant.external_id,
          }))

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

