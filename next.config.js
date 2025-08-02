/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pl", "es", "en", "de"],
    defaultLocale: "pl",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zezretmrpdwoqdhfvjgw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images//**",
      },
    ],
  },
};

module.exports = nextConfig;
