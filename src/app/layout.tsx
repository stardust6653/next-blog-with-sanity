import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/common/layout/Footer';
import Header from '../components/common/layout/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '../context/SWRConfigContext';
import Head from 'next/head';
import { Metadata } from 'next';
import Layout from '@/components/common/layout/Layout';

const sans = Open_Sans({ subsets: ['latin'] });
const largeOgImage =
  'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F1800_1600.webp?alt=media&token=237f4be3-0481-4402-b846-4ed1d40705fb';
const smallOgImage =
  'https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2';

export const metadata: Metadata = {
  title: {
    default: 'Soyeah Blog',
    template: 'Soyeah Blog | %s',
  },
  openGraph: {
    title: 'Soyeah Blog',
    description: '프론트엔드 개발자 Soye의 블로그',
    url: 'https://www.soyeah-blog.xyz/',
    siteName: 'Soyeah Blog(박소예의 개발 블로그)',
    images: [
      {
        url: smallOgImage,
        width: 800,
        height: 600,
      },
      {
        url: largeOgImage,
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
    title: 'Soyeah Blog',
    description: '프론트엔드 개발자 Soye의 블로그',
    images: [
      {
        url: smallOgImage,
        width: 800,
        height: 600,
      },
      {
        url: largeOgImage,
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
      </head>

      <body className="h-[calc(100vh-104px)]">
        <AuthContext>
          <SWRConfigContext>
            <Header />

            <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Layout>{children}</Layout>
            </main>

            <Footer />
          </SWRConfigContext>
        </AuthContext>
        <Analytics />
      </body>
    </html>
  );
}
