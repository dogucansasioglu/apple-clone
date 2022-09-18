import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { SanityAdapter } from 'next-auth-sanity';
import { sanityClient } from '../../../lib/sanity.server';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(sanityClient),
};

export default NextAuth(options);
