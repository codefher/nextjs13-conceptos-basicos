import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodeFher',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: ['tienda', 'online', 'ecommerce'],
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
