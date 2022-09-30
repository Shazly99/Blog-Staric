import '../styles/globals.scss'
import Header from '../components/Header';
import { Head } from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
