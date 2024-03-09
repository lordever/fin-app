import React from 'react';
import {SignIn} from "@/app/components/auth/auth.component";
import {auth, signOut} from "@root/auth";
import UserIcon from "./user-icon/user-icon.component";
import {StringUtilService} from "@/app/services/string-util.service";

const stringUtilService = new StringUtilService();
export default async function Header() {
    const session = await auth()
    if (!session?.user) return <SignIn/>

    const initials = stringUtilService.getInitials(session?.user.name);

    return <UserIcon initials={initials} onLogout={async () => {
        "use server";
        await signOut();
    }}/>;
};