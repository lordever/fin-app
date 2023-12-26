import React from 'react';
import Link from "next/link";
import TestModal from "@/app/components/test-modal/test-modal.component";

const WelcomePage = () => {
    return (
        <>
            <h1>Welcome</h1>

            <h2>Parallel roouting</h2>
            <TestModal/>
            <p><Link href={"/parallel-routing"}>Parallel-routing</Link></p>
            <p><Link href={"/intercepting-routes"}>Intercepting-routes</Link></p>
            <p><Link href={"/test-layout-page"}>Layouts</Link></p>
            <p><Link href={"/request-handlers"}>Request Handlers</Link></p>
            <p><Link href={"/server-fetching-data"}>Server fetching data</Link></p>
        </>
    );
};

export default WelcomePage;