import createOrder from "@/lib/createOrder"

export async function POST(req: Request) {

  const body = await req.json()
  const order = await createOrder(body);
  return new Response(JSON.stringify(order), {
    status: 200
  })
}
