'use client'

import React from 'react';
import {withDictionary} from "@/app/[lang]/components/hoc/WithDictionary";
import {useDictionary} from "@/app/[lang]/context/DictionaryContext";

const Page = () => {
    const {dictionary} = useDictionary();

    return (
        <>
            <h1>{dictionary.sideMenu.brandName}</h1>
        </>
    );
};

export default withDictionary(Page);