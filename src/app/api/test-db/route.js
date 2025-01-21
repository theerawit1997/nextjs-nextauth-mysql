import { connectMySQL } from "./db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const connection = await connectMySQL();
    // const [rows] = await connection.query("SELECT 1 + 1 AS result");
    // const [rows] = await connection.query("SHOW TABLES");
    const [rows] = await connection.query("SELECT * FROM users;");
    return NextResponse.json({
      message: "Database connected successfully!",
      data: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed!", error: error.message },
      { status: 500 }
    );
  }
}
