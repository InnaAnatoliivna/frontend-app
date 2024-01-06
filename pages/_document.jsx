import { Html, Head, Main, NextScript } from 'next/document';
import { roboto } from '../src/app/components/SharedLayout'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={roboto.className}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}