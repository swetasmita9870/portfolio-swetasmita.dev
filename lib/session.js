import cookie from "js-cookie";

export function isBrowser() {
  if (typeof window === 'undefined') {
    return false
  } else {
    return true
  }
}


const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

export const setCookie = (key, value, expires = 15) => {
  if (isBrowser()) {
    cookie.set(key, value, {
      expires: expires,
      path: "/",
    });
  } else {
    console.log("setCookie failed");
    return
  }
};

export const getCookie = (key, req) => {
  return isBrowser() ? getCookieFromBrowser(key) : "";
};