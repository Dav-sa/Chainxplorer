import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
