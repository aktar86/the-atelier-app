import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../app/action/server/auth";

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
  ],
};
