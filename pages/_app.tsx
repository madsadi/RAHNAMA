import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeSystem} from "../utils/system";
import QueryProviderNiazmandiha from "../utils/query";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <QueryProviderNiazmandiha>
          <ThemeSystem>
              <Component {...pageProps} />
          </ThemeSystem>
      </QueryProviderNiazmandiha>


  )
}
export default MyApp
