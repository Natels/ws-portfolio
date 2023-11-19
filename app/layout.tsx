import type { Metadata } from 'next'
import './globals.css'
import { karla } from '@/fonts'

export const metadata: Metadata = {
  title: 'Whitney Smith Design',
  description: 'Graphic Design Portfolio',
  icons: { icon: 'icon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
