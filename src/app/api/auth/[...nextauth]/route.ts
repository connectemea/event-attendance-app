import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
// import prisma from "@/libs/prisma";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials): Promise<any> {
                const { email, password } = credentials as { email: string, password: string };

                if (!email || !password) return null;

                try {
                    await connectMongoDB();

                    // find user by email
                    const user = await User.findOne({ email });
                    //  prisma cant use in browser rendering error throwing only server side 
                    // const User = await prisma.user.findFirst({ where: { email } });

                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    console.log("Password match", passwordMatch);

                    if (!passwordMatch) return null;

                    return user;
                } catch (error) {
                    console.log("Error", error);
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
