import Image from "next/image";

export default function ProjectItems({ data }) {
  const title = data.properties.이름.title.plain_text;
  const github = data.properties.Github.url;
  const discription = data.properties.설명.rich_text[0].plain_text;
  const imgsrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select.name;
  const startDate = data.created_time;
  const endDate = data.last_edited_time;

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
        <a href={github}>깃허브 바로가기</a>
        <h3 className="mt-4 text-xl">
          작업기간 : {startDate} ~ {endDate}(
          {calculatePeriod(startDate, endDate)}일)
        </h3>
        <div className="flex items-start mt-2">{tags}</div>
      </div>
    </div>
  );
}
