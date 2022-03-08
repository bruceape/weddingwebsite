import '../styles/globals.css'
import { Provider } from '../components/AppStateProvider'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
