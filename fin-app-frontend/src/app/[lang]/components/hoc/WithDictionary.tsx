'use client'

import React, {ComponentType, useEffect, useState} from 'react';
import {Locale} from "@root/i18n-config";
import {Dictionary} from "@/app/[lang]/types/dictionary.model";
import {getDictionary} from "@root/get-dictionary";
import {CircularProgress} from "@mui/material";

export function withDictionary<T>(WrappedComponent: ComponentType<T & { dictionary: Dictionary }>) {
    return function WithDictionary(props: T & { params: { lang: Locale } }) {
        const [dictionary, setDictionary] = useState<Dictionary | null>(null);

        useEffect(() => {
            getDictionary(props.params.lang).then(setDictionary);
        }, [props.params.lang]);

        if (!dictionary) {
            return <CircularProgress />;
        }

        return <WrappedComponent {...props} dictionary={dictionary}/>;
    };
}