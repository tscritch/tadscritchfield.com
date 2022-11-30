import "../styles/globals.css";
import type { AppProps } from "next/app";
import BlobBackground from "components/blob-background";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlobBackground>
      <Component {...pageProps} />
    </BlobBackground>
  );
}
