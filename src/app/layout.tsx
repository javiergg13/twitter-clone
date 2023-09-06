import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
