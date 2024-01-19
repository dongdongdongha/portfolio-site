import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Project() {
  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const result = await res.json();
  const projects = await res.json();

  const projectIds = projects.results.map((project) => {
    aProject.id;
  });

  console.log(`projectIds : ${projectIds}`);

  return {
    props: {},
  };
}
