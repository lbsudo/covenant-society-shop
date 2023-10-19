import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";



export const POST = async (request: NextRequest) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-08-16",
    });

    const reqBody = await request.json();
    const { items, email } = reqBody;


    const extractingItems = items.map((item: Product) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Number(item.price) * 100,
        product_data: {
          name: item.name,
          description: item.variant,
          images: [item.thumbnail],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ['US']
      },
      shipping_options: [
        {
          shipping_rate: "shr_1Ny2LiFXWggz9FO3FWaO5140"
        }
      ],
      billing_address_collection: "required",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/`,
      metadata: {
        email,
      },
    });

    // const recipientAddress = session.shipping_details;
    // const recipientEmail = session.customer_email;

    // // Make an order to the Printful API
    // const printfulResponse = await fetch("https://api.printful.com/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     external_id: session.id,
    //     recipient: {
    //       name: recipientAddress?.name,
    //       address1: recipientAddress?.address?.line1,
    //       city: recipientAddress?.address?.city,
    //       state_name: recipientAddress?.address?.state,
    //       country_name: recipientAddress?.address?.country,
    //       zip: recipientAddress?.address?.postal_code,
    //       phone: recipientAddress?.phone,
    //       email: recipientEmail,
    //     },
    //     items: items.map((item: Product) => ({
    //       variant_id: item.sync_variant.variant_id,
    //       quantity: item.quantity,
    //       product_template_id: item.sync_variant.sync_product_id,
    //     })),
    //   }),
    // });

    // // Create a Stripe webhook event
    // await fetch(process.env.STRIPE_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     type: "order.completed",
    //     data: {
    //       orderId: printfulResponse.json(),
    //       sessionId: session.id,
    //     },
    //   }),
    // });

    return NextResponse.json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};


