import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.dynamicBlog.createMany({
      data: [
        {
          title: "Sample Blog Post",
          imgCDN:
            "https://img.freepik.com/free-photo/cupcakes_74190-20.jpg?w=1380&t=st=1698735448~exp=1698736048~hmac=be6a375baca7255d9d055ac3c3d3131cc56b48d6797423f06ad69e3c27a64969",
          content: "This is the content of a blog post.",
        },
        {
          title: "Sample Blog Post2",
          imgCDN:
            "https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=1380&t=st=1698739359~exp=1698739959~hmac=04ab1b9a0b08149108a79ab7ef90d78e9f0b6f522e1ff7c7455e0ca1c31f17d7",
          content: "This is the content of a blog post.",
        },
        {
          title: "Sample Blog Post3",
          imgCDN:
            "https://img.freepik.com/free-photo/chocolate-cake-decorated-with-forest-fruits-blueberries-strawberries-blackberries-ai-generative_123827-24046.jpg?w=1380&t=st=1698759363~exp=1698759963~hmac=826c33df40a378eadef35bdd9a4b4c8ee12011477964e570e4985f1580bd94fc",
          content: "This is the content of a blog post.",
        },
        {
          title: "Sample Blog Post4",
          imgCDN:
            "https://img.freepik.com/premium-photo/cake-with-white-cream-chocolate-drips-pomegranate-nuts-chocolate-decor_199620-5923.jpg?w=1380",
          content: "This is the content of a blog post.",
        },
        {
          title: "Sample Blog Post5",
          imgCDN:
            "https://img.freepik.com/free-photo/delicious-cake-with-fruits-cream_23-2148972058.jpg?w=1380&t=st=1698761881~exp=1698762481~hmac=49129c3fb1a8f29ae466e6c912f5366899b66e7b3a6cf61822ff7b943a532f19",
          content: "This is the content of a blog post.",
        },
        {
          title: "Sample Blog Post6",
          imgCDN:
            "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-28235.jpg?w=1380&t=st=1698761858~exp=1698762458~hmac=5782550fc364e984d2581e3cb044f71393da73cdcd307363675366373a8ab737",
          content: "This is the content of a blog post.",
        },
      ],
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.dynamicBlog.findMany();

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
