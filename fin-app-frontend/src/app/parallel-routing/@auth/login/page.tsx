'use client'

import React from 'react';
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    return (
        <div>
            Login Page
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    );
};

export default LoginPage;