import NextAuth, {NextAuthConfig} from "next-auth"
import Keycloak from "@auth/core/providers/keycloak";

export const config = {
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    secret: "09a3bb7cb3394b6c8185884e7ca31c2c",
    providers: [
        Keycloak({
            clientId: "portal",
            clientSecret: "aqBN5rK30hfFbFbZA8y88Bq9YeFVkM8Q",
            issuer: "http://localhost:8080/realms/fin-app",
        })
    ],
    callbacks: {
        authorized({request, auth}) {
            const {pathname} = request.nextUrl
            if (pathname === "/middleware-example") return !!auth
            return true
        },
        async redirect({url, baseUrl}) {
            if (url === '/api/auth/signout') {
                return `http://localhost:8080/realms/fin-app/protocol/openid-connect/logout?redirect_uri=${baseUrl}&frontchannel_logout=true`;
            }
            return baseUrl;
        }
    },
} satisfies NextAuthConfig

export const {handlers, auth, signIn, signOut} = NextAuth(config)
