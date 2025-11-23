import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/init-db";

// API endpoint to initialize database tables
// Call this once after setting up the database connection
export async function GET() {
  try {
    await initDatabase();
    return NextResponse.json(
      { success: true, message: "Database initialized successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Database initialization error:", error);
    return NextResponse.json(
      { error: "Failed to initialize database", details: error.message },
      { status: 500 }
    );
  }
}

