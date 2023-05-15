/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pl", "es", "en", "de"],
    defaultLocale: "pl",
    localeDetection: false,
  },
};

module.exports = nextConfig;
