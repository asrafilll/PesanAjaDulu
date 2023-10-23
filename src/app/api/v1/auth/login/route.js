import { prisma } from "@/utils/prisma";
import { compare, hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { phone, password } = await request.json();
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        phone,
      },
    });

    if (findUser) {
      const isPasswordMatches = await compare(password, findUser.password);
      if (isPasswordMatches) {
        return NextResponse.json(
          { data: findUser, message: "Login Berhasil" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Password anda salah" },
          { status: 401 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
