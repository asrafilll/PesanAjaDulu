import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET ALL FORM BY USERID
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userid");

  let formData;

  try {
    if (userId) {
      formData = await prisma.formOrder.findMany({
        where: {
          form: {
            userId,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    return NextResponse.json(
      { data: formData, message: "Response Data Fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// CREATE NEW FORM ORDER
export async function POST(req) {
  const { title, desc, endFormDate, userId, inventories } = await req.json();

  try {
    const createFormOrder = await prisma.formOrder.create({
      data: {
        title,
        desc,
        endFormDate: new Date(endFormDate),
        userId,
      },
    });

    const createOrderItems = await Promise.all(
      inventories.map((inventoryItem) => {
        return prisma.orderItems.create({
          data: {
            formId: createFormOrder.id,
            inventoryId: inventoryItem.inventoryId,
            quantity: inventoryItem.quantity,
          },
        });
      })
    );

    return NextResponse.json(
      {
        data: { createFormOrder, createOrderItems },
        message: "New FormOrder created",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
