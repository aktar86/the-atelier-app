import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../app/action/server/auth";
import GoogleProvider from "next-auth/providers/google";
import { collection, dbConnect } from "./dbConnect";

const usersCollection = await dbConnect(collection.USERS);

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials);

        const user = await loginUser(credentials);

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isExist = await usersCollection.findOne({
        email: user?.email,
      });
      if (!isExist) {
        const newUser = {
          provider: account?.provider,
          name: user?.name,
          email: user?.email,
          image: user?.image,
          role: "user",
          createdAt: new Date(), // ISOString এর চেয়ে Date অবজেক্ট রাখা ভালো
        };
        await usersCollection.insertOne(newUser);
      }
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, user, token }) {
      console.log(session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token);
      return token;
    },
  },
};
