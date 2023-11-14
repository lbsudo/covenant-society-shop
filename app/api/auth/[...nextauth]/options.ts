import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import db from '../../../../db/index'

export const options: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your Username"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your Password"
        }
      },
      async authorize(credentials) {
        // Meant for data pulling.
        const user = { id: "18", name: "Lawrence", password: "test1" }

        if (credentials?.username === user.name && credentials?.password == user.password) {
          return user
        } else {
          return null
        }

      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
}
