import React from 'react';
import Link from "next/link";
import TestModal from "@/app/components/test-modal/test-modal.component";

const NextSamplesPage = () => {
    return (
        <>
            <h1>Welcome</h1>

            <h2>Parallel roouting</h2>
            <TestModal/>
            <p><Link href={"/next-samples/parallel-routing"}>Parallel-routing</Link></p>
            <p><Link href={"/next-samples/intercepting-routes"}>Intercepting-routes</Link></p>
            <p><Link href={"/next-samples/test-layout-page"}>Layouts</Link></p>
            <p><Link href={"/next-samples/request-handlers"}>Request Handlers</Link></p>
            <p><Link href={"/next-samples/server-fetching-data"}>Server fetching data</Link></p>
            <p><Link href={"/next-samples/samples"}>Samples</Link></p>
        </>
    );
};

export default NextSamplesPage;