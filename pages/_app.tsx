import type { AppProps } from 'next/app'
import 'inter-ui/inter.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Main from '../components/layouts/Main'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
