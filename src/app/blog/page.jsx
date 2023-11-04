import Action from "@/components/Action";
import Blog from "@/components/Blog";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";

import { PrismaClient } from "@prisma/client";

async function getData() {
  let prisma = new PrismaClient();

  return await prisma.blog.findMany();
}

export default async function blog() {
  const data = await getData();

  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Blog */}
      <Blog propsData={data} />
      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
