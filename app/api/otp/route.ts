import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { initDatabase } from "@/lib/init-db";

// Initialize database on first import
let dbInitialized = false;

// Generate a random 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
  try {
    // Initialize database if not already done
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const body = await request.json();
    const { mobile } = body;

    // Validate mobile number
    if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number" },
        { status: 400 }
      );
    }

    const client = await pool.connect();

    try {
      // Generate OTP
      const otp = generateOTP();
      
      // OTP expires in 10 minutes
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 10);

      // Store OTP in database
      await client.query(
        `INSERT INTO otp_verifications (mobile, otp, expires_at)
         VALUES ($1, $2, $3)`,
        [mobile, otp, expiresAt]
      );

      // In production, you would send this OTP via SMS service
      // For now, we'll return it in the response (dummy implementation)
      // TODO: Replace with actual SMS API integration
      
      console.log(`OTP for ${mobile}: ${otp}`); // Log for development

      return NextResponse.json(
        {
          success: true,
          message: "OTP sent successfully",
          // In production, remove this line and send OTP via SMS
          otp: otp, // Remove this when real SMS API is integrated
        },
        { status: 200 }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error("OTP generation error:", error);
    return NextResponse.json(
      { error: "Failed to send OTP. Please try again." },
      { status: 500 }
    );
  }
}

