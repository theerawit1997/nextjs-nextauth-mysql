import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { initializeDatabase } from "@/lib/sequelize";

initializeDatabase(); //test ว่าติดต่อ db ได้ไหม

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const existingUserName = await User.findOne({ where: { name } });
    if (existingUserName) {
      return NextResponse.json({ message: "Name is already registered." }, { status: 409 });
    }

    const existingUserEmail = await User.findOne({ where: { email } });
    if (existingUserEmail) {
      return NextResponse.json({ message: "Email is already registered." }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "User registered successfully!",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    }, { status: 201 });

  } catch (error) {
    // console.error("Error occurred:", error);
    return NextResponse.json({ message: "An error occurred: " + error.message }, { status: 500 });
  }
}
