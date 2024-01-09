import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/global.css'
import Header from '../components/Header'
import { Inter } from 'next/font/google'
import Footers from '../components/Footers';

const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap" rel="stylesheet" /> 

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footers />
        </div>
    );
}