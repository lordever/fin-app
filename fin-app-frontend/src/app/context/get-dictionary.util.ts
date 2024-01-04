'use client'

import {Locale} from "@/app/types/dictionary.model";

type DictionaryLoader = {
    [key in Locale]: () => Promise<any>;
};

const dictionaries: DictionaryLoader = {
    [Locale.EN]: () => import('../../../dictionaries/en.json').then((module) => module.default),
    [Locale.RU]: () => import('../../../dictionaries/ru.json').then((module) => module.default),
}

export const getDictionaryUtil = async (locale: Locale) =>
    dictionaries[locale]?.() ?? await dictionaries[Locale.EN]()