import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '../context/SWRConfigContext';
import Head from 'next/head';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  openGraph: {
    title: {
      default: 'Soyeah Blog',
      template: 'Soyeah Blog | %s',
    },
    description: '프론트엔드 개발자 Soye의 블로그',
    url: 'https://www.soyeah-blog.xyz/',
    siteName: 'Soyeah Blog(박소예의 개발 블로그)',
    images: [
      {
        url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-photo.5732a1e9.jpg&w=384&q=75',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-photo.5732a1e9.jpg&w=384&q=75',
        width: 1800,
        height: 1600,
        alt: '프론트엔드 개발자 Soye의 블로그',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.className} h-full`}>
      <Head>
        <meta property="og:title" content="Soyeah Blog" />
        <meta property="og:description" content="프론트엔드 개발자 Soye의 블로그" />
        <meta property="og:url" content="https://www.soyeah-blog.xyz/" />
        <meta property="og:site_name" content="Soyeah Blog(박소예의 개발 블로그)" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          property="og:image:url"
          content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-photo.5732a1e9.jpg&w=384&q=75"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:url"
          content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-photo.5732a1e9.jpg&w=384&q=75"
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="프론트엔드 개발자 Soye의 블로그" />
        <meta property="og:type" content="website" />
      </Head>

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
        <Analytics />
      </body>
    </html>
  );
}
