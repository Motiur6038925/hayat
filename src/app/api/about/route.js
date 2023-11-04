import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const title = "Sample Blog Post";
const content = "This is the content of a blog post.";

const names = [
  "Julie Bailey",
  "Anne Smith",
  "Tom Jones",
  "Danny Smith",
  "Ian Bailey",
  "Julie Smith",
  "Danny Smith",
  "Anne Bailey",
];
const imgCDNs = [
  "https://img.freepik.com/free-photo/smiling-male-office-worker-against-white-office_155003-14460.jpg?w=1380&t=st=1698815825~exp=1698816425~hmac=4781059b299e3aa448a44baa1854e0c80f50ba3ced6ed46ce8a4cdaa0e7d01f7",
  "https://img.freepik.com/free-photo/medium-shot-smiley-man-sitting-desk_23-2149927603.jpg?w=1380&t=st=1698815798~exp=1698816398~hmac=39a04020b002d24bab73c45b91541bea5d44ef7e5427d2a33f45394559fefd66",
  "https://img.freepik.com/free-photo/businessman-black-suit-pointing-his-agenda_114579-15903.jpg?w=1380&t=st=1698815779~exp=1698816379~hmac=605a7d29f8356ee2af97d257e3ad19ce667a18d649eab7124bc21316d23ed8bd",
  "https://img.freepik.com/free-photo/happy-young-businesswoman-holding-clipboard-pen-looking-camera_23-2147943428.jpg?w=1060&t=st=1698815746~exp=1698816346~hmac=2b187da6f9e8c151fd8b26ba54c7958d9576b91dea39163a161b3fe6f4c577e7",
  "https://img.freepik.com/free-photo/close-up-young-businesswoman-sitting-office-looking-camera_23-2148073293.jpg?w=1380&t=st=1698815717~exp=1698816317~hmac=79187ea98a4bf1a6708955e13b8cbcbc30445a5dc2e2ab436bfc63021c14c0b9",
  "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=1380&t=st=1698815700~exp=1698816300~hmac=4fd1ff6d8eae2ac0f3ae17dd73129813d4e026d7838fbdeaf70f72f240551b21",
  "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=1380&t=st=1698815683~exp=1698816283~hmac=b49ce002c970edc3b1caeb157bd4c087bdc06aa49a4b1b0599c76fce2210e8b1",
  "https://img.freepik.com/premium-photo/portrait-young-man-sitting-his-desk-office_484651-5103.jpg?w=1380",
  // Add more image CDN links as needed
];

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    const results = await Promise.all(
      imgCDNs.map(async (imgCDN, index) => {
        const result = await prisma.about.create({
          data: {
            title: title,
            content: content,
            imgCDN: imgCDN,
            name: names[index], // Include the name from the names array
          },
        });
        return result;
      })
    );

    return NextResponse.json({ status: "Success", data: results });
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
