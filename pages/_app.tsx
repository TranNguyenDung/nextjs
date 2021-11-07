import '../styles/globals.scss'
import type { pageProps } from 'next/app'
import { wrapper, AppProps } from './redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

//export default MyApp


export default wrapper.withRedux(MyApp);