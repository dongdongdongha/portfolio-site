import Layout from "@/components/layout";
import ProjectItems from "@/components/projects/project-item";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Project({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 : {projects.results.length}
          <span className="pl-4 text-blue-500"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.map((aProject) => {
            <ProjectItems key={aProject.id} data={aProject} />;
          })}
        </div>
      </div>
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
