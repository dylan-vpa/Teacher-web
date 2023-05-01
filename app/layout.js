import './globals.css'
import Navegation from '@/components/nav/Navegation'

export const metadata = {
  title: 'Patricia Barranco',
  description: 'More info',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navegation />
        </header>
        {children}
      </body>
    </html>
  )
}
