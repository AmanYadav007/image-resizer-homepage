import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Image Resizer',
  description: 'Resize images directly from your browser.',
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public folder
    shortcut: '/favicon.ico', // Optional: Shortcut icon
    apple: '/apple-touch-icon.png', // Optional: Apple touch icon
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png', // Optional: Additional icon formats
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}