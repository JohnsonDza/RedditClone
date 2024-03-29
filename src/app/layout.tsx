import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/Toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
    lang='en'
    className={cn(
      'bg-white text-slate-900 antialiased light',
      inter.className
    )}>
    <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
      {/* <Providers> */}
        <Navbar />
        
        {/* {authModal} */}

        <div className='container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>
      {/* </Providers> */}
      <Toaster />
    </body>
  </html>
  )
}
