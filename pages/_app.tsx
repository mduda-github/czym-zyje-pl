import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, IntlProvider } from "react-intl";
import Polish from "../lang/pl.json";
import English from "../lang/en.json";
import Spanish from "../lang/es.json";
import German from "../lang/de.json";
import { useMemo } from 'react'

const nutinoSans = Nunito_Sans({ weight: ['400', '600', '700', '900'], subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'pl', defaultLocale } = useRouter();
  const messages = useMemo(() => {
    switch (locale) {
      case 'pl':
        return Polish;
      case 'es':
        return Spanish;
      case 'en':
        return English;
      case 'de':
        return German;
      default:
        return Polish;
    }
  }, [locale]);
  return <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale}>
    <main className={nutinoSans.className}>
      <Head>
        <title>czym-zyje.pl - stay informed, stay ahead</title>
      </Head>
      <link rel="alternate" href="http://localhost:3000/" hrefLang="x-default" />
      <link rel="alternate" href="http://localhost:3000/" hrefLang="pl" />
      <link rel="alternate" href="http://localhost:3000/pl" hrefLang="pl" />
      <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      <link rel="alternate" href="http://localhost:3000/es" hrefLang="es" />
      <link rel="alternate" href="http://localhost:3000/de" hrefLang="de" />
      <Component {...pageProps} />
    </main>
  </IntlProvider>
}
