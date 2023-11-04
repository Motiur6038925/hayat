import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import NewsLetter from "@/components/NewsLetter";

import { PrismaClient } from "@prisma/client";

async function getData() {
  let prisma = new PrismaClient();

  return await prisma.blog.findMany();
}

export default async function Home() {
  const data = await getData();
  

  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero propsData={data} />

      {/* Feature Section */}
      <Feature />

      {/* How It Work Section */}
      <HowItWork />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
