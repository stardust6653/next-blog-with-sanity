import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '../context/SWRConfigContext';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Soyeah Blog',
    template: 'Soyeah Blog | %s',
  },
  description: '프론트엔드 개발자 Soye의 블로그',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.className} h-full`}>
      <body className="h-[calc(100vh-104px)]">
        <AuthContext>
          <SWRConfigContext>
            <div className="min-h-full relative ">
              <Header />
              <main>{children}</main>
            </div>
          </SWRConfigContext>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
