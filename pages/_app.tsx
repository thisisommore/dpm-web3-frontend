import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../src/contexts/WalletContext";
import Script from "next/script";
import Head from "next/head";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLEndpoint } from "../src/env";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: GraphQLEndpoint,
    cache: new InMemoryCache(),
  });
  return (
    <>
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js" />
      <ApolloProvider client={client}>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
