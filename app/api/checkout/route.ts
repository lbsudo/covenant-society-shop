import { Product } from "@/types/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
// import { handleStripeWebhook } from "@/webhooks/printful";

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
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/`,
      metadata: {
        email,
      },
    });

    // Call the webhook function
    // await fetch("https://your-webhook-endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(session),
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


