import { connect } from '@planetscale/database'
import { config } from '../db/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
// import { eq } from 'drizzle-orm'
import { orders } from '../db/schema'


type NewOrder = typeof orders.$inferInsert;
export default async function createOrder(orderData: NewOrder) {
  const conn = connect(config)
  const db = drizzle(conn)

  try {
    const newOrder = await db.insert(orders).values(orderData);

    console.log('Order created:', newOrder)

    return newOrder
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}
