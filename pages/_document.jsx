import { Html, Head, Main, NextScript } from 'next/document';
import { fontDMSans } from '../src/app/components/SharedLayout'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={fontDMSans.className}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}