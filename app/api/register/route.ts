import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// Initialize database on first import
let dbInitialized = false;

export async function POST(request: NextRequest) {
  try {
    // Initialize database if not already done
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const body = await request.json();
    const {
      mobile,
      otp,
      name,
      email,
      dob,
      testMode,
      testDate,
      timeSlot,
      course,
      state,
    } = body;

    // Validate required fields
    if (!mobile || !name || !email || !dob || !testMode || !testDate || !course || !state) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Verify OTP first
    if (!otp) {
      return NextResponse.json(
        { error: "OTP verification required" },
        { status: 400 }
      );
    }

    const client = await pool.connect();

    try {
      // Check if OTP is valid
      const otpResult = await client.query(
        `SELECT * FROM otp_verifications 
         WHERE mobile = $1 AND otp = $2 AND verified = FALSE AND expires_at > NOW()
         ORDER BY created_at DESC LIMIT 1`,
        [mobile, otp]
      );

      if (otpResult.rows.length === 0) {
        return NextResponse.json(
          { error: "Invalid or expired OTP" },
          { status: 400 }
        );
      }

      // Mark OTP as verified
      await client.query(
        `UPDATE otp_verifications SET verified = TRUE WHERE id = $1`,
        [otpResult.rows[0].id]
      );

      // Check if mobile number already registered
      const existingReg = await client.query(
        `SELECT id FROM registrations WHERE mobile = $1`,
        [mobile]
      );

      if (existingReg.rows.length > 0) {
        return NextResponse.json(
          { error: "This mobile number is already registered" },
          { status: 400 }
        );
      }

      // Insert registration
      const result = await client.query(
        `INSERT INTO registrations 
         (mobile, name, email, dob, test_mode, test_date, time_slot, course, state)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING id, created_at`,
        [mobile, name, email, dob, testMode, testDate, timeSlot || null, course, state]
      );

      return NextResponse.json(
        {
          success: true,
          message: "Registration successful! We will contact you soon.",
          registrationId: result.rows[0].id,
        },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

