import { Metadata } from 'next'
import './globals.css'
import { Footer, Header } from '@/components/Layout'
import ScrollContextProvider from '@/context/ScrollContext'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-montserrat'>
        <ScrollContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ScrollContextProvider>
      </body>
    </html>
  )
}
