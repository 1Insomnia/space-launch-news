import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <meta content="#fafafa" name="theme-color" />
        <meta content="#fafafa" name="msapplication-TileColor" />
      </Head>
      <body className="bg-light dark:bg-dark text-dark dark:text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
