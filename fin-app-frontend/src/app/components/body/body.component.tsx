"use client";

import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import {DictionaryProvider} from "@/app/context/DictionaryContext";
import SideMenu from "@/app/components/side-menu/side.menu.component";
import {Content} from "antd/es/layout/layout";

const Body = ({children}: { children: React.ReactNode }) => {
    return (
        <>
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
        </>
    );
};

export default Body;