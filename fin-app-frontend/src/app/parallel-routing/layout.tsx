'use client'

import React from 'react';
import {useSelectedLayoutSegment} from "next/navigation";

const Layout = ({
                    children,
                    teams,
                    analytics,
                    auth
                }: {
    children: React.ReactNode,
    auth: React.ReactNode,
    teams: React.ReactNode,
    analytics: React.ReactNode
}) => {
    const loginSegments = useSelectedLayoutSegment('auth')

    console.log(loginSegments);

    return (
        <div className="test-layout">
            {children}
            {analytics}
            {teams}
            {auth}
        </div>
    );
};

export default Layout;