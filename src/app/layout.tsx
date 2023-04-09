import Header from './components/Header/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Soye님의 블로그',
  description: '프론트엔드 개발자 박소예입니다. 만나뵙게 되어 반갑습니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
