import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    const result = await prisma.price.create({
      data: {
        title: "Start saving time today andchooseyour best plan",
        content: "Best for freelance developers who need to save their time",
        catagorises: "Begginer",
        price: "$32.99",
        features1: "Unlimited Domains",
        features2: "1 Datebases",
        features3: "3 Emails",
        features4: "10 GB Storag",
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
