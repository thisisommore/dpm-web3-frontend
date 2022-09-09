import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../src/contexts/WalletContext";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js" />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </>
  );
}

export default MyApp;
