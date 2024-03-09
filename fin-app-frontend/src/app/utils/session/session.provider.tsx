'use client';
import React, {FC} from 'react'

import {SessionProvider} from 'next-auth/react';

const SessionProviderWrapper: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default SessionProviderWrapper