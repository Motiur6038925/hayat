import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Price from "@/components/Price";
import Service from "@/components/Service";

import { PrismaClient } from "@prisma/client";

async function getData() {
  let prisma = new PrismaClient();

  return await prisma.price.findMany();
}
async function getData2() {
  let prisma = new PrismaClient();

  return await prisma.service.findMany();
}

export default async function Home() {
  const data = await getData();
  const data2 = await getData2();
  console.log(data2);
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Service */}
      <Service props={data2} />

      {/* Price */}
      <Price props={data} />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
