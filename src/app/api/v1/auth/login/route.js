import prisma from "@/utils/prisma";
import { compare, hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { phoneNumber, password } = await request.json();
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        phoneNumber,
      },
    });

    if (!findUser) {
      return NextResponse.json({ message: "Invalid Credentials" });
    }

    const isPasswordMatches = await compare(password, findUser.password);

    if (!isPasswordMatches) {
      return NextResponse.json({ message: "Invalid Credentials" });
    }

    const responseData = {
      id: findUser.id,
      fullName: findUser.fullName,
      shopName: findUser.shopName,
    };
    return NextResponse.json({ data: responseData, message: "Login Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
