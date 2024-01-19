import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>홈</h1>
      <h1 className="text-3xl font-bold underlinek">홈입니다.</h1>
    </Layout>
  );
}
