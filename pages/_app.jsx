// app.js
import { AppProps } from 'next/app';
import Index from './index';
import '../src/app/globals.css';

const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    )
}

export default App