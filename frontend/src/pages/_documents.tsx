// filepath: /c:/Users/kazuy/Documents/github/nariWebApp/frontend/src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script defer src="/live2d.min.js" />
                    <script defer src="/live2dcubismcore.min.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;