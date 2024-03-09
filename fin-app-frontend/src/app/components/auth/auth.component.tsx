import GFButton from "@/app/common/components/button/button.component";
import React from "react";
import {signIn, signOut} from "@root/auth";
import {Form} from "antd";

export function SignIn({
                           provider
                       }: { provider?: string }) {
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <GFButton htmlType="submit">Sign In</GFButton>
        </Form>
    )
}

export function SignOut({
                            provider
                        }: { provider?: string }) {
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={async () => {
                "use server"
                await signOut({redirectTo: "/api/auth/signout"});
            }}
        >
            <GFButton htmlType="submit">
                Sign Out
            </GFButton>
        </Form>
    )
}