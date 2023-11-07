import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const orders = mysqlTable("Orders", {
  id: int("ID").notNull(),
  orderId: int("OrderID"),
  productId: int("ProductID"),
  variantId: int("VariantID"),
  quantity: int("Quantity"),
  fullName: varchar("FullName", { length: 255 }),
  company: varchar("Company", { length: 255 }),
  addressLine1: varchar("AddressLine1", { length: 255 }),
  addressLine2: varchar("AddressLine2", { length: 255 }),
  country: varchar("Country", { length: 255 }),
  stateProvincePrefecture: varchar("StateProvincePrefecture", { length: 255 }),
  city: varchar("City", { length: 255 }),
  postalZipCode: int("PostalZipCode"),
  phone: varchar("Phone", { length: 20 }),
},
  (table) => {
    return {
      ordersId: primaryKey(table.id),
    }
  });
