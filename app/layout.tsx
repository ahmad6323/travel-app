import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Travel ',
  description: 'Travel UI/UX app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
      <NavBar />
        
        <main className='relative overflow-hidden'>
          {children}
        </main>
        
        <Footer />
        
        </body>
     
    </html>
  )
}
