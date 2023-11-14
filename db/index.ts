import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { config } from './config'

// create the connection
const connection = connect(config);

const db = drizzle(connection);

export default db;
