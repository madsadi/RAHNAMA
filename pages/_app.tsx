import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeSystem} from "../utils/system";
import QueryProviderNiazmandiha from "../utils/query";
import store  from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <Provider store={store}>
          <QueryProviderNiazmandiha>
              <ThemeSystem>
                  <Component {...pageProps} />
              </ThemeSystem>
          </QueryProviderNiazmandiha>
      </Provider>


  )
}
export default MyApp
