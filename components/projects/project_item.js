import Image from "next/image"

export default function ProjectItem({ data }) {

    const projectTitle = data.properties.이름.title[0].plain_text
    const projectTag = data.properties.태그.multi_select
    const projectGithub = data.properties.Github.url
    const des = data.properties.Description.rich_text[0].plain_text
    const coverimg = data.cover.external.url
    const startDate = data.properties.날짜.date.start
    const endDate = data.properties.날짜.date.end

    const calculatedPeriod = (startDate, endDate) => {
        const startDateStrarr = startDate.split('-');
        const endDateStrarr = endDate.split('-');

        var start = new Date(startDateStrarr[0], startDateStrarr[1], startDateStrarr[2]);
        var end = new Date(endDateStrarr[0], endDateStrarr[1], endDateStrarr[2]);

        console.log(`startDate: ${start}`)
        console.log(`endDate: ${end}`)

        const diffInMs = Math.abs(end - start);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)
        return result;
    }

    return (
        <div className="project-card">
            <Image className="rounded-t-lg" src={coverimg} alt="cover image" width="100%" height="60%" layout="responsive" objectFit="cover" quality={100} />
            <div className="p-4">
                <h1 className="text-2xl font-bold">{projectTitle}</h1>
                <h3 className="mt-4 text-xl">
                    {des}
                </h3>
                <a href={projectGithub}>깃허브 바로가기</a>
                <p className="my-1">
                    작업기간 : {startDate} ~ {endDate}, {calculatedPeriod(startDate, endDate)}일
                </p>
                <div className="flex items-start mt-2">
                    {projectTag.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}