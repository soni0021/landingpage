import pool from "./db";

// Initialize database table
export async function initDatabase() {
  try {
    const client = await pool.connect();
    
    // Create registrations table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        mobile VARCHAR(10) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        dob DATE NOT NULL,
        test_mode VARCHAR(20) NOT NULL,
        test_date VARCHAR(100) NOT NULL,
        time_slot VARCHAR(20),
        course VARCHAR(50) NOT NULL,
        state VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create OTP verification table for tracking OTPs
    await client.query(`
      CREATE TABLE IF NOT EXISTS otp_verifications (
        id SERIAL PRIMARY KEY,
        mobile VARCHAR(10) NOT NULL,
        otp VARCHAR(6) NOT NULL,
        verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP NOT NULL
      )
    `);

    // Create index on mobile for faster lookups
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_registrations_mobile ON registrations(mobile)
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_otp_mobile ON otp_verifications(mobile)
    `);

    client.release();
    console.log("Database tables initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

