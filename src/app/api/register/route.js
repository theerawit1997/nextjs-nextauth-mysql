import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, password, email } = await req.json();
    console.log("name:" + name);
    console.log("password:" + password);
    console.log("email:" + email);
    return NextResponse.json({ message: "registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
