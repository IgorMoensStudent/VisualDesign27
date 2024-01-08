import type { AppProps } from 'next/app'
import '../styles/global.css'
import Header from '../components/Header'
import { Inter } from 'next/font/google'
import Footers from '../components/Footers';

const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Header />
            <Component {...pageProps} />
            <Footers />
        </div>
    );
}