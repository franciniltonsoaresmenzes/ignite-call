import NextAuth, { NextAuthOptions } from 'next-auth'
import GoolgeProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoolgeProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
}

export default NextAuth(authOptions)
