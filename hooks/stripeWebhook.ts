
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export const POST = async (request: NextRequest) => {
  const buf = await request.arrayBuffer();
  const sig = request.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const error = err as Error
    console.error(`Error message: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Perform actions based on the checkout session
    console.log(`Payment received!`);

    if (session.metadata) {
      const items = JSON.parse(session.metadata.items);

      // Create Printful order
      const printfulOrder = {
        recipient: {
          name: session.shipping_details?.name,
          address1: session.shipping_details?.address?.line1,
          city: session.shipping_details?.address?.city,
          state_code: session.shipping_details?.address?.state,
          country_code: session.shipping_details?.address?.country,
          zip: session.shipping_details?.address?.postal_code,
        },
        items: items.map((item: any) => ({
          variant_id: item.variant_id, // You'll need to map the Stripe product ID to the Printful variant ID
          quantity: item.quantity,
          name: item.name, // This might not be necessary, check the Printful API docs
        })),
      };
    }
  }

  return NextResponse.json({ received: true });
};

