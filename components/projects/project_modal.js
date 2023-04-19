import Image from "next/image";

export default function Projectmodal({ data, setOpenBool, id, title, content, writer }) {

    const projectTitle = data.properties.이름.title[0].plain_text
    const projectTag = data.properties.태그.multi_select
    const projectGithub = data.properties.Github.url
    const des = data.properties.Description.rich_text[0].plain_text
    const coverimg = data.cover.external.url
    const startDate = data.properties.날짜.date.start
    const endDate = data.properties.날짜.date.end

    const close = () => {
        setOpenBool(false);
    }

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
        <div className="modal-container">
            <button className="modal-close" onClick={close}>
                X
            </button>
        </div>
    );
}