import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '../../Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saleem St. Michael Castle',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
