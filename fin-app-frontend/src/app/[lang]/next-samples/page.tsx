import React from 'react';
import Link from "next/link";
import TestModal from "@/app/[lang]/components/test-modal/test-modal.component";

const NextSamplesPage = () => {
    return (
        <>
            <h1>Welcome</h1>

            <h2>Parallel roouting</h2>
            <TestModal/>
            <p><Link href={"/welcome/parallel-routing"}>Parallel-routing</Link></p>
            <p><Link href={"/welcome/intercepting-routes"}>Intercepting-routes</Link></p>
            <p><Link href={"/welcome/test-layout-page"}>Layouts</Link></p>
            <p><Link href={"/welcome/request-handlers"}>Request Handlers</Link></p>
            <p><Link href={"/welcome/server-fetching-data"}>Server fetching data</Link></p>
            <p><Link href={"/welcome/samples"}>Samples</Link></p>
        </>
    );
};

export default NextSamplesPage;