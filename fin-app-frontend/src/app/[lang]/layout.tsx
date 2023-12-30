'use client'

import type {Metadata} from 'next'
import {Ubuntu} from 'next/font/google'
import React, {useMemo} from "react";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@mui/material";
import styles from "./common/styles/common.module.scss"
import {DictionaryProvider} from "@/app/[lang]/context/DictionaryContext";
import {Locale} from "@/app/[lang]/types/dictionary.model";

const inter = Ubuntu({weight: '300', subsets: ["latin"]})

const metadata: Metadata = {
    title: 'Finance helper - application which help you ',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                       params
                                   }: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {
    const router = useRouter();
    const pathname = usePathname();
    const isMainPage = useMemo(() => {
        return pathname.includes("/welcome");
    }, [pathname])

    return (
        <html lang={params.lang}>
        <body className={inter.className}>
        {
            !isMainPage && <Button onClick={() => router.back()}>Back</Button>
        }
        <div className={styles.app}>
            <DictionaryProvider lang={params.lang}>
                {children}
            </DictionaryProvider>
        </div>
        </body>
        </html>
    )
}