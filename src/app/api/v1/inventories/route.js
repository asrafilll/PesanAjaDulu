import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userid");

  let inventoryData;

  try {
    if (userId) {
      inventoryData = await prisma.inventory.findMany({
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
      { data: inventoryData, message: "Response Data Fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req) {
  const { title, desc, image, price, userId } = await req.json();

  try {
    const createInventory = await prisma.inventory.create({
      data: {
        title,
        desc,
        image,
        price,
        userId,
      },
    });

    return NextResponse.json(
      { data: createInventory, message: "New inventory created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
