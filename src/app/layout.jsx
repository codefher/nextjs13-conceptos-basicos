import Navbar from '@/components/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'CodeFher',
  description: 'Esta es la pagima principal de mi tienda',
  kewords: ['tienda', 'online', 'eccommerce']
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
})
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
