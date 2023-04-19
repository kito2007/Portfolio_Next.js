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
                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProjects) => (
                        <div>
                            <ProjectItem key={aProjects.id} data={aProjects} />
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