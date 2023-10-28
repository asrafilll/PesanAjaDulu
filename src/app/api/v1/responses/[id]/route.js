import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// GET ALL RESPONSE DATA BASED ON THE USERID
export async function GET(_, { params }) {
  const userId = params.id;
  let responseData;
  try {
    if (userId) {
      responseData = await prisma.response.findMany({
        where: {
          form: {
            userId,
          },
        },
        include: {
          orderItems: {
            include: {
              inventory: {},
            },
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
