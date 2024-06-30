import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";

interface CustomUser {
    id: string;
    name: string;
    email: string;
    status: string;
    role: string;
}


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials): Promise<any> {
                const { email, password, role } = credentials as { email: string, password: string, role: string };

                if (!email || !password) return null;
                try {
                    // find user by email
                    const user = await prisma.user.findFirst({ where: { email } });
                    // if user does not exist
                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    // console.log("Password match", passwordMatch);

                    // if password does not match
                    if (!passwordMatch) return null;
                    console.log("User", user);

                    // fetch user role && status from the database 
                    const role_id = user.role_id;
                    const status_id = user.status_id;
                    const Authrole = await prisma.role.findFirst({ where: { id: role_id || undefined } });
                    const status = await prisma.user_status.findFirst({ where: { id: status_id || undefined } });

                    // check if user role is the same as the role in the credentials
                    console.log("Role", Authrole, role)
                    if (Authrole?.name !== role) return null;
                    console.log("User", user);

                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: Authrole?.name as string,
                        status: status?.name as string,
                    };
                } catch (error) {
                    console.log("Error", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.id = (user as CustomUser).id;
                token.email = (user as CustomUser).email;
                token.name = (user as CustomUser).name;
                token.role = (user as CustomUser).role;
                token.status = (user as CustomUser).status;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user = {
                    name: token.name,
                    email: token.email,
                    id: token.id,
                    role: token.role,
                    status: token.status,
                };
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
