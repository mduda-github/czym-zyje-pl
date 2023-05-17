import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IntlProvider } from "react-intl";
import Polish from "../lang/pl.json";
import English from "../lang/en.json";
import Spanish from "../lang/es.json";
import German from "../lang/de.json";
import React, { useEffect, useMemo } from 'react'

const nutinoSans = Nunito_Sans({ weight: ['400', '600', '700', '900'], subsets: ['latin'] })

const storeUserSetPreference = (pref: string) => {
  localStorage.setItem("theme", pref);
};

const getUserSetPreference = (): string | null => {
  return localStorage.getItem("theme");
};

const getMediaQueryPreference = (): string => {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const mql = window.matchMedia(mediaQuery);
  const hasPreference = typeof mql.matches === "boolean";

  if (hasPreference) {
    return mql.matches ? "dark" : "light";
  }
  return 'light'
};

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

  const [theme, setTheme] = React.useState("light");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      storeUserSetPreference(newTheme)
      window.document.body.dataset.theme = newTheme
    }
  }

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    const mediaQueryPreference = getMediaQueryPreference();

    if (userSetPreference) {
      setTheme(userSetPreference)
    } else {
      setTheme(mediaQueryPreference)
    }

    window.document.body.dataset.theme = theme
  }, [theme])

  return <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale}>
    <main className={nutinoSans.className}>
      <Head>
        <title>czym-zyje.pl - stay informed, stay ahead</title>
      </Head>
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/" hrefLang="x-default" />
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/" hrefLang="pl" />
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/pl" hrefLang="pl" />
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/en" hrefLang="en" />
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/es" hrefLang="es" />
      <link rel="alternate" href="https://czym-zyje-pl-ssr.vercel.app/de" hrefLang="de" />
      <Component {...pageProps} theme={theme} handleThemeToggle={handleThemeToggle} />
    </main>
  </IntlProvider>
}
