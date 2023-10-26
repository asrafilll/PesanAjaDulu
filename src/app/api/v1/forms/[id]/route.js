import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET SINGLE FORM BY ID
export async function GET(_, { params }) {
  const id = params.id;

  try {
    const formData = await prisma.formOrder.findFirst({
      where: {
        id,
      },
      include: {
        inventory: {
          include: {
            inventory: {
              select: {
                title: true,
                desc: true,
                image: true,
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
