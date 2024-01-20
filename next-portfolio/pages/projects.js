import Layout from "@/components/layout";
import ProjectItems from "@/components/projects/project-item";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Project({ projects }) {
  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>총 프로젝트 : {projects.results.length}</h1>

      {projects.results.map((aProject) => {
        <ProjectItems key={aProject.id} data={aProject} />;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      // sorts: [
      //   {
      //     property: "Name",
      //     direction: "ascending",
      //   },
      // ],
      page_size: 100,
    }),
  };

  let projectNames;
  let projects;
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )
    .then((r) => r.json())
    .then((r) => {
      projects = r;
      projectNames = r.results.map((aProject) => {
        aProject.properties.이름.title[0].plain_text;
      });
    });

  console.log(projectNames);

  return {
    props: { projects },
  };
}
