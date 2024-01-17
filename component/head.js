import React from "react";
import NextHead from "next/head";
import { Logo, Profile } from "../lib/config";
import Script from "next/script";

const defaultTitle = "SWETASMITA RANJAN SAHOO-Frontend Developer";
const defaultOGTitle = "SWETASMITA RANJAN SAHOO";
const defaultDescription = "Welcome to my portfolio, where I showcase my professional and personal achievements. As you explore my work, you'll find a diverse range of projects, from web development and design to writing and marketing. With a keen eye for detail and a passion for delivering quality work, I take pride in everything I create. Whether you're a potential client or just curious about my skills and experience, I invite you to take a look and see what I have to offer. Thank you for visiting!";
const defaultOGURL = "https://portfolio-swetasmita-dev.vercel.app/";
const defaultOGImage = Profile;
const defaultAltText = "SwETASMITA RANJAN SAHOO";
const OG_LOGO = Profile;
const CustomHead = (props) => {
  const { userName, username } = props;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{userName || username || defaultTitle}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      {props.metaTags && props.metaTags.length > 0 && (
        <meta name="keywords" content={props.metaTags.join(",")}></meta>
      )}
      <link rel="canonical" href={defaultOGURL} />
      <meta property="fb:app_id" content={"1344493016062063"} />
      <link href={Profile} rel="icon" />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Swetasmita Ranjan Sahoo",
          "url": "https://portfolio-swetasmita-dev.vercel.app/",
          "image": Profile,
          "jobTitle": "Frontend Developer",
          "sameAs": [
            "https://www.linkedin.com/in/swetasmita-ranjan-sahoo-55811a173/",
            "https://github.com/swetasmita9870",
            "LinkToYourTwitterProfile"
          ],
          "alumniOf": {
            "@type": "Siksha 'O' Anusanshan UNiversity",
            "name": "MCA"
          }
        })
      }}
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.pageTitle || props.ogTitle || defaultOGTitle || defaultTitle} />
      <meta name="twitter:description" content={props.description || defaultDescription} />
      <meta name="twitter:url" content={props.url || defaultOGURL} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:creator" content={props.url || defaultOGURL} />
      <meta name="twitter:image" content={props.twitterUrl || props.ogImage || defaultOGImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content={props.language || "en"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.pageTitle || props.ogTitle || defaultOGTitle || defaultTitle} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:image" content={props.ogImage || props.graphUrl || props.facebookUrl || OG_LOGO} />
      <meta property="og:image:secure_url" content={props.ogImage || props.facebookUrl || props.graphUrl || OG_LOGO} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content={props.altText || defaultAltText} />
    </NextHead>
  )
}

export default CustomHead;
