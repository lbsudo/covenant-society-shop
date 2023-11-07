import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";
dotenv.config({ path: '.env' });

export default {
  schema: "./db/*",
  out: "./drizzle",
  driver: 'mysql2',
  dbCredentials: {
    connectionString: `${process.env.DATABASE_URL}`,
  }
} satisfies Config;
