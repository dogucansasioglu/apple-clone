import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter } from "next-auth-sanity";
import { sanityClient } from "../../../lib/sanity.server";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  adapter: SanityAdapter(sanityClient as any),
});
