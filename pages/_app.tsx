import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import BlobBackground from "components/blob-background";
import "../styles/globals.css";
import { Header } from "components/header";
import Head from "next/head";

const panchang = localFont({
  src: [
    {
      path: "./fonts/Panchang-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Panchang-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Panchang-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Panchang-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Panchang-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Panchang-Extrabold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={panchang.className} style={{ height: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlobBackground>
        <Header />
        <Component {...pageProps} />
      </BlobBackground>
    </main>
  );
}
