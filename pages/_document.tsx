import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-italic.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
          />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
