import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Thai } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: '--font-noto-thai',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Feynman Project - เรียนรู้อย่างเข้าใจ',
  description: 'แพลตฟอร์มการเรียนรู้ที่ช่วยให้คุณเข้าใจวิทยาศาสตร์อย่างแท้จริง',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${geist.variable} ${geistMono.variable} ${notoSansThai.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
