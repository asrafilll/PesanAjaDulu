import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

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
