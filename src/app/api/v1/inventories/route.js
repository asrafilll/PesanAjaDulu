import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

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

export async function DELETE(req, { params }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const deletedInventory = await prisma.inventory.delete({
      where: {
        id,
      },
    });

    if (deletedInventory) {
      return NextResponse.json(
        { data: deletedInventory, message: "Inventory item deleted" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: `Inventory item with ID ${id} not found` },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 404 });
  }
}
