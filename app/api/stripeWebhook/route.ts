import { NextRequest } from "next/server";
import Stripe from "stripe";


export const POST = async (req: NextRequest, res: any) => {

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
  });

  const buf = await req.text();
  const sig = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event;

  try {
    if (!sig || !webhookSecret) return;

    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (error: any) {
    console.log(`Webhook error: ${error.message}`);
    return res.status(400).send(`Webhook error: ${error.message}`)
  }

  console.log('event', event);

  // Handle the event
  if (event.type === 'payment_intent.succeeded') {
    // Perform actions when payment_intent.succeeded event is received
    // For example, update your database or send a confirmation email
    const paymentIntent = event.data.object;

    console.log(paymentIntent);
  }

  res.status(200).send('Webhook received and processed successfully');

};

