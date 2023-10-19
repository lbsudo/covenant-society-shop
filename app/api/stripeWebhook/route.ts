import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { buffer } from 'micro'


// export const config = {
//   api: {
//     bodyParser: false,
//   }
// }

export const POST = async (req: any, res: any) => {

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
  });

  const buf = await buffer(req);
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

  res.status(200).send();

};

