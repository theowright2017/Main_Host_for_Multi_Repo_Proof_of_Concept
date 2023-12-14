import '@/styles/globals.css'

globalThis.stringToUppercase = (string) => string.toUpperCase();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
