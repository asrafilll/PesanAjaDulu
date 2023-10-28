import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const userId = params.id;
  let inventoryData;

  try {
    if (userId) {
      inventoryData = await prisma.inventory.findMany({
        where: {
          userId,
        },
      });
      return NextResponse.json(
        { data: inventoryData, message: "Response Data Fetched" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
