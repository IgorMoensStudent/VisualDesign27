import type { AppProps } from 'next/app'
import '../styles/global.css'
import Header from '../components/Header'
import { Footer } from 'flowbite-react';
import Footers from '../components/Footers';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footers />
        </div>
    );
}