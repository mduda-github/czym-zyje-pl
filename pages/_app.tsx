import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'

const nutinoSans = Nunito_Sans({weight: ['400', '600', '700', '900'], subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={nutinoSans.className}>
    <Component {...pageProps} />
  </main>
}
