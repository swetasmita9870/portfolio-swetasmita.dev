import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/theme_variable.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import { APP_NAME } from "../lib/config";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../lib/session";
import { useRouter } from "next/router";
const NextNProgress = dynamic(() => import('nextjs-progressbar'))

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const userTheme = getCookie("userTheme");
    if (userTheme === "dark") {
      document.body.classList.add("dark_theme");
      setTheme("light")
    } else {
      document.body.classList.add("light_theme");
      setTheme("dark")
    }

  }, []);

  const changeTheme = (e) => {
    if (getCookie("userTheme") === "light") {
      document.body.classList.toggle("dark_theme");
      setCookie("userTheme", "dark");
      setTheme("dark")
      console.log("first")
      e?.stopPropagation();
    } else {
      document.body.classList.toggle("dark_theme");
      setCookie("userTheme", "light");
      setTheme("light")
      e?.stopPropagation();
    }
  };

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content" />
      <title>{APP_NAME}</title>
    </Head>
    <NextNProgress color="var(--l_base)" />
    <Component {...pageProps} changeTheme={changeTheme} theme={theme} />
  </>)
}
