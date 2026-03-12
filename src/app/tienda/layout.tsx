import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tienda oficial',
}

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  )
}
