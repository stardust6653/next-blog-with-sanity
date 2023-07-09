import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import { addUser } from '../../../../service/user';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { id, email, image, name } }) {
      if (!email) {
        return false;
      }
      addUser({ id, name: name || '', image, email, username: email.split('@')[0] });
      return true;
    },
    async session({ session, token }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
          id: token.sub ?? '',
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
const handler: NextAuthOptions = NextAuth(authOptions);

export { handler as GET, handler as POST };
