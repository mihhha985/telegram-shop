import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import TelegramInit from './TelegramInit'

const roboto = Roboto({
  weight: ['300','400','500','700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arcadia — Curated Digital Games',
  description: 'A polished digital gaming marketplace concept with curated releases, instant delivery and original product artwork.'
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1
}

export default function RootLayout({ children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
				<AppRouterCacheProvider>
					<TelegramInit />
					{children}
				</AppRouterCacheProvider>
			</body>
    </html>
  )
}
