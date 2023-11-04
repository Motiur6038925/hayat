import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    const result = await prisma.counter.create({
      data: {
        SaleRate: "25%",
        Conversations: "643,533",
        Subscribers: "$33,261",
        TotalRevenue: "$33,261", // Include the name from the names array
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
