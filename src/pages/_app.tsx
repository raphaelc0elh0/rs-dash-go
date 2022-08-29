import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext"
import Head from "next/head"
import { makeServer } from "../services/mirage"

if (process.env.NODE_ENV === "development") {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
