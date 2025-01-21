import db from "../db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const [rows] = await db.query("SELECT 1 + 1 AS result");
    // return NextResponse.json({
    //   message: "Database connection successful!",
    //   data: rows,
    // });
    // const [rows] = await db.query("SHOW TABLES");
    // return NextResponse.json({
    //   message: "Tables fetched successfully!",
    //   tables: rows,
    // });
    const [rows] = await db.query("SELECT * FROM users");
    return NextResponse.json({
      message: "Database connection successful!",
      data: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed!", error: error.message },
      { status: 500 }
    );
  }
}
