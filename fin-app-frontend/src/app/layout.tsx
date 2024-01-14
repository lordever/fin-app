'use client'

import type {Metadata} from 'next'
import {Ubuntu} from 'next/font/google'
import React from "react";
import styles from "./common/styles/common.module.scss"
import {DictionaryProvider} from "@/app/context/DictionaryContext";
import cls from "classnames";
import {store} from "@/app/store/store";
import {Provider} from "react-redux";
import SideMenu from "@/app/components/side-menu/side.menu.component";
import Content from "@/app/components/content/content.component";

const inter = Ubuntu({weight: '300', subsets: ["latin"]})

const metadata: Metadata = {
    title: 'Finance helper - application which help you ',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body className={cls(inter.className, styles.app)}>
        <div className={styles.app}>
            <React.StrictMode>
                <Provider store={store}>
                    <DictionaryProvider>
                        <SideMenu/>
                        <Content>
                            {children}
                        </Content>
                    </DictionaryProvider>
                </Provider>
            </React.StrictMode>
        </div>
        </body>
        </html>
    )
}