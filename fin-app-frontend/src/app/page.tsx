'use client'

import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <>
            <p><Link href={"/welcome"}>Welcome page</Link></p>
            <p><Link href={"/next-samples"}>Next Samples</Link></p>
        </>
    );
};

export default Page;