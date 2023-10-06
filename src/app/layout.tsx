import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '../context/SWRConfigContext';
import Head from 'next/head';
import { Metadata } from 'next';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Soyeah Blog',
    template: 'Soyeah Blog | %s',
  },
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
        url: 'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2',
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F1800_1600.webp?alt=media&token=237f4be3-0481-4402-b846-4ed1d40705fb',
        width: 1800,
        height: 1600,
        alt: '프론트엔드 개발자 Soye의 블로그',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Soyeah Blog',
      template: 'Soyeah Blog | %s',
    },
    description: '프론트엔드 개발자 Soye의 블로그',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2',
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F1800_1600.webp?alt=media&token=237f4be3-0481-4402-b846-4ed1d40705fb',
        width: 1800,
        height: 1600,
        alt: '프론트엔드 개발자 Soye의 블로그',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.className} h-full`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content="Soyeah Blog" />
        <meta property="og:description" content="프론트엔드 개발자 Soye의 블로그" />
        <meta property="og:url" content="https://www.soyeah-blog.xyz/" />
        <meta property="og:site_name" content="Soyeah Blog(박소예의 개발 블로그)" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2"
        />
        <meta property="og:image:alt" content="프론트엔드 개발자 Soye의 블로그" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="soyeah-blog.xyz" />
        <meta property="twitter:url" content="https://www.soyeah-blog.xyz/" />
        <meta name="twitter:title" content="Soyeah Blog" />
        <meta name="twitter:description" content="프론트엔드 개발자 Soye의 블로그" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2"
        />
      </head>

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
