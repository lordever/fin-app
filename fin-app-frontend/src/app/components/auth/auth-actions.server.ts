import {signIn, signOut} from "@root/auth";

export async function signInAction(provider?: string) {
    await signIn(provider);
}

export async function signOutAction(provider: string) {
    await signOut({redirectTo: "/api/auth/signout"});
}