import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeSystem} from "../utils/system";
import '../components/wizard/wizardstyle.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ThemeSystem>
        <Component {...pageProps} />
      </ThemeSystem>

  )
}
export default MyApp
