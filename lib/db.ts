import { Pool } from "pg";

// Parse the connection string
const connectionString = process.env.DATABASE_URL || 
  "postgresql://neondb_owner:npg_KLJVinH5CN6e@ep-misty-lake-ahb862ep-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// Create a connection pool
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test the connection
pool.on("connect", () => {
  console.log("Connected to Neon database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;

