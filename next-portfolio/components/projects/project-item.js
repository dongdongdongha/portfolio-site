import Image from "next/image";

export default function ProjectItems({ result }) {
  const title = result.peoperties.이름.title[0].plain_text;
  const github = result.properties.Github.url;
  const discription = result.properties.설명.rich_text[0].plain_text;
  const imgsrc = result.cover.file?.url || result.cover.external.url;
  const tags = result.peoperties.태그.multi_select;
  const startDate = result.properties.WorkPeriod.date.start;
  const endDate = result.properties.WorkPeriod.date.end;

  const calculatePeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgsrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="contain"
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 mt-4 text-xl>
          {discription}
        </h3>
        <a href="{github}">깃허브 바로가기</a>
        <h3 className="mt-4 text-xl">
          작업기간 : {start} ~ {end}({calculatePeriod(start, end)}일)
        </h3>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
