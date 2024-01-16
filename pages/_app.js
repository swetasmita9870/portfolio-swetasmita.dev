import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/theme_variable.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import { APP_NAME } from "../lib/config";
import dynamic from "next/dynamic";
const NextNProgress = dynamic(() => import('nextjs-progressbar'))

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content" />
      <title>{APP_NAME}</title>
    </Head>
    <NextNProgress color="var(--l_base)" />
    <Component {...pageProps} />
  </>)
}
