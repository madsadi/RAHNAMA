import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeSystem} from "../utils/system";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ThemeSystem>
        <Component {...pageProps} />
      </ThemeSystem>

  )
}
export default MyApp
