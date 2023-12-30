'use client'

import React from 'react';
import {useRouter} from "next/navigation";

const AuthPage = () => {

    const router = useRouter();

    return (
        <button onClick={() => router.push("/parallel-routing/login")}>
            Login
        </button>
    );
};

export default AuthPage;