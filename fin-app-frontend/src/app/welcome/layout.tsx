'use client'

import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/app/store/store";

const WelcomeLayout = ({children, sideMenu}: { children: React.ReactNode, sideMenu: React.ReactNode }) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                {sideMenu}
                {children}
            </Provider>
        </React.StrictMode>
    );
};

export default WelcomeLayout;