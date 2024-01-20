import Image from "next/image";

export default function ProjectItems({ data }) {
  const title = data.peoperties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const discription = data.properties.설명.rich_text[0].plain_text;
  const imgsrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="p-6 bg-slate-700 rounded-md">
      <Image src={imgsrc} width="100%" height="60%" />
      <h1>{title}</h1>
      <h4>{discription}</h4>
      <a href="{github}">깃허브 바로가기</a>
    </div>
  );
}
