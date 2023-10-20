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

      // Retrieve the Stripe session
      const session = await stripe.checkout.sessions.retrieve(paymentIntent.checkout_session_id);

      // Get the recipient's address from the session
      const recipientAddress = session.shipping_details?.address;

      // Access the line items and their metadata
      const lineItems = session.line_items?.data ?? [];
      const items = lineItems.map((item: any) => ({
        product_template_id: item.metadata.product_template_id,
        variant_id: item.metadata.variant_id,
        quantity: item.metadata.quantity,
      }));

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
        items: items,
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

      // Perform necessary actions when payment intent is succeeded
      // For example, update your database, send a confirmation email, or fulfill the order
      console.log("Payment intent succeeded:", paymentIntent);
    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

