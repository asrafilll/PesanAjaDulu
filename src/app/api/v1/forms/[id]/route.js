import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET SINGLE FORM BY ID
export async function GET(_, { params }) {
  const userId = params.id;
  let formData;

  try {
    formData = await prisma.formOrder.findMany({
      where: {
        userId,
      },
      include: {
        inventory: {
          include: {
            inventory: {
              select: {
                id: true,
                title: true,
                price: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      { data: formData, message: "Form Data Fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
