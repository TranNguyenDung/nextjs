import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

//export default MyApp


export default wrapper.withRedux(MyApp);