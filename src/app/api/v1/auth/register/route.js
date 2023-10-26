import prisma from "@/utils/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullName, shopName, phoneNumber, password } = await request.json();
  try {
    const hashedPassword = await hash(password, 10);
    const registerData = await prisma.user.create({
      data: {
        fullName,
        shopName,
        phoneNumber,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      { data: registerData, message: "Register Berhasil" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
