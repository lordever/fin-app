import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Dictionary} from "@/app/types/dictionary.model";
import {getDictionaryUtil} from "@/app/context/get-dictionary.util";
import {CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {selectLocale} from "@/app/store/localization/localization.selector";

interface DictionaryContextProps {
    dictionary: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextProps>({dictionary: {}});

export const useDictionary = () => useContext(DictionaryContext);

export const DictionaryProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const currentLocale = useSelector(selectLocale);
    const [dictionary, setDictionary] = useState<Dictionary | null>(null);

    useEffect(() => {
        getDictionaryUtil(currentLocale).then(setDictionary);
    }, [currentLocale]);

    if (!dictionary) {
        return <CircularProgress/>;
    }

    return <DictionaryContext.Provider value={{dictionary}}>{children}</DictionaryContext.Provider>;
};