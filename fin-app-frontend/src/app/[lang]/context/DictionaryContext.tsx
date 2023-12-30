import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Dictionary, Locale} from "@/app/[lang]/types/dictionary.model";
import {getDictionary} from "@root/get-dictionary";
import {CircularProgress} from "@mui/material";

interface DictionaryContextProps {
    dictionary: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextProps>({dictionary: {}});

export const useDictionary = () => useContext(DictionaryContext);

export const DictionaryProvider: React.FC<{ children: ReactNode; lang: Locale }> = ({children, lang}) => {
    const [dictionary, setDictionary] = useState<Dictionary | null>(null);

    useEffect(() => {
        getDictionary(lang).then(setDictionary);
    }, [lang]);

    if (!dictionary) {
        return <CircularProgress/>;
    }

    return <DictionaryContext.Provider value={{dictionary}}>{children}</DictionaryContext.Provider>;
};