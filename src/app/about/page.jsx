import AboutInfo from "@/components/AboutInfo";
import Action from "@/components/Action";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Team from "@/components/Team";

import { PrismaClient } from "@prisma/client";

async function getData() {
  let prisma = new PrismaClient();

  return await prisma.about.findMany();
}
async function getData2() {
  let prisma = new PrismaClient();

  return await prisma.counter.findMany();
}

export default async function Home() {
  const data = await getData();
  const data2 = await getData2();
  console.log(data);
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* About Info */}
      {/* <AboutInfo /> */}

      {/* Team */}
      <Team props={data} />

      {/* Counter */}
      <Counter props={data2} />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
