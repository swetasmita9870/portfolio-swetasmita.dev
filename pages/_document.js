import { Html, Head, Main, NextScript } from 'next/document'
import { getCookie } from '../lib/session'

export default function Document() {
  let userTheme = getCookie('userTheme')
  return (
    <Html lang="en">
      <Head>
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? <><script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');`
            }} />
          </> : ''
        }
      </Head>
      <body
        className={userTheme === "dark" ? "dark_theme" : ""}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
