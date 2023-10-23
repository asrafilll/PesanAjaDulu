import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET ALL RESPONSE DATA BASED ON THE USERID
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userid");

  try {
    const responseData = await prisma.response.findMany({
      where: {
        form: {
          userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      { data: responseData, message: "Response Data Fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// CREATE NEW RESPONSE FROM FORMORDER
export async function POST(request) {
  const { data } = await request.json();
  try {
    const newResponseData = await prisma.response.create({
      data,
    });
    return NextResponse.json(
      { data: newResponseData, message: "New response created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
