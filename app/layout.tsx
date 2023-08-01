import TopMenu from '@/component/topMenu/TopMenu'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300','400','500','700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Telegram desctop',
  description: 'Telegram desctop main',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
				<div className='layout'>
					<TopMenu />
					{children}
				</div>
			</body>
    </html>
  )
}
