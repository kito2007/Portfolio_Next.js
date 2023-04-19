import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project_item";
import Projectmodal from "../components/projects/project_modal";
import { Warning } from "postcss";
import { useState } from "react";

export default function Projects({ projects }) {

    const [modalOpen, setOpenBool] = useState(false);

    const showModal = () => {
        setOpenBool(true);
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>빡코딩 포트폴리오</title>
                    <meta name="description" content="오늘도 빡코딩" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">프로젝트 : <span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
                <input class="placeholder:italic placeholder:text-slate-400 block w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="찾고 싶은 프로젝트 이름" type="text" name="search" />

                <button className="mt-3" type="submit">버튼</button>
                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProjects) => (
                        <div key={aProjects.id}>
                            <ProjectItem data={aProjects} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "이름",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectsNames = projects.results.map((aProjects) => (
        aProjects.properties.이름.title[0].plain_text
    ))

    return {
        props: { projects }, // will be passed to the page component as props
    }
}