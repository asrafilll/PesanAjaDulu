import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET ALL RESPONSE DATA BASED ON THE USERID
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userid");

  let responseData;
  try {
    if (userId) {
      responseData = await prisma.response.findMany({
        where: {
          form: {
            userId,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      responseData = await prisma.response.findMany();
    }

    return NextResponse.json(
      { data: responseData, message: "Response Data Fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// CREATE NEW RESPONSE BY CUSTOMERS
export async function POST(req) {
  try {
    const {
      formId,
      customerName,
      customerAddress,
      customerPhone,
      customerNote,
      orderItems,
    } = await req.json();

    const createResponse = await prisma.response.create({
      data: {
        formId,
        customerName,
        customerAddress,
        customerPhone,
        customerNote,
        orderItems: {
          create: orderItems,
        },
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      { data: createResponse, message: "New response created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
