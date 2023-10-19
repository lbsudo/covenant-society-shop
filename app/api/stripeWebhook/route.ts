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
    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

