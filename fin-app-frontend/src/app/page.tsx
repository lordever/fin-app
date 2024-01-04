'use client'

import React from 'react';
import {useDictionary} from "@/app/context/DictionaryContext";
import Link from "next/link";

const Page = () => {
    const {dictionary} = useDictionary();

    return (
        <>
            <h1>{dictionary.welcome.title}</h1>

            <p><Link href={"/welcome"}>Welcome page</Link></p>
            <p><Link href={"/next-samples"}>Next Samples</Link></p>
        </>
    );
};

export default Page;